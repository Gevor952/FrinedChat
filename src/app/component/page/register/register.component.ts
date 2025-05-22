import {Component, inject} from '@angular/core';
import {User} from '../../../model/user.model';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  private readonly router = inject(Router);

  protected user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    img:'',
  };

  private readonly http = inject(HttpClient);

  onSave() {
    this.http.post("http://localhost:8080/user/register", this.user).subscribe();
    this.router.navigate(['/auth/login']);

  }

}
