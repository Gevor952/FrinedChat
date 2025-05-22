import {Component, inject} from '@angular/core';
import {UserDTO} from '../../../model/user.model';
import {UserService} from '../../../services/user.service';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FriendRequest} from '../../../model/friend.request';
import {FriendRequestService} from '../../../services/friend.request.service';
import {NavigationComponent} from '../../feature/navigation/navigation.component';

@Component({
  selector: 'app-add-friend',
  imports: [
    NgForOf,
    FormsModule,
    NavigationComponent
  ],
  templateUrl: './add.friend.component.html',
  styleUrl: './add.friend.component.css'
})
export class AddFriendComponent {

  private readonly us = inject(UserService);
  private readonly frs = inject(FriendRequestService);
  protected users?: UserDTO[];
  protected keyword = "";
  protected userImages: { [id: number]: string } = {};


  constructor() {
    this.us.getUsers().subscribe(
      {
        next: (result) => {
          this.users = result.content;
        }
      }
    )
    this.loadUsers();
  }


  loadUsers() {
    this.us.getUsers().subscribe({
      next: (result) => this.users = result.content
    });
  }


  getByKeyword() {
    console.log(this.keyword);
    this.us.getUsersByKeyword(this.keyword).subscribe({
      next: (result) => {
        this.users = result.content;
      }
    });
    this.keyword = "";
  }


  sendFriendRequest(friendId: number) {
    this.us.getUser().subscribe({
      next: (result) => {
        let friendRequest: FriendRequest = {
          userId: result.id,
          friendId: friendId,
        }
        console.log(friendRequest);
        this.frs.sendFriendRequest(friendRequest);
      }
    })

  }






}


