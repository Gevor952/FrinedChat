import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {FriendRequestService} from '../../../services/friend.request.service';
import {FriendRequestI} from '../../../model/friend.request';
import {NavigationComponent} from '../../feature/navigation/navigation.component';

@Component({
  selector: 'app-accept-friend',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NavigationComponent
  ],
  templateUrl: './accept.friend.component.html',
  styleUrl: './accept.friend.component.css'
})
export class AcceptFriendComponent {

  private readonly frs = inject(FriendRequestService);
  protected friendRequestIs?: FriendRequestI[];
  protected keyword = "";

  constructor(){
    this.frs.getFriendRequest().subscribe({
      next: result => this.friendRequestIs = result,
    })
  }


  accept(id: number) {
    this.frs.acceptFriendRequest(id)
    this.frs.getFriendRequest().subscribe({
      next: result => this.friendRequestIs = result,
    })
  }
}
