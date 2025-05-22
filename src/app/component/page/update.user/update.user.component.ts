import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserDTO, UserUpdate} from '../../../model/user.model';
import {UserService} from '../../../services/user.service';
import {NavigationComponent} from '../../feature/navigation/navigation.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update.user.component.html',
  styleUrl: './update.user.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationComponent, RouterLink]
})
export class UpdateUserComponent {

  private userDTO?: UserDTO;
  private readonly us = inject(UserService)
  user?: UserUpdate ;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor() {
    this.us.getUser().subscribe({
      next: response => {
        this.userDTO = response;
        this.user = {
          id: this.userDTO.id,
          name: this.userDTO.name,
        };
      }
    });
  }


  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.selectedFile && this.user) {
      this.us.updateUser(this.user, this.selectedFile);
    }
  }
}
