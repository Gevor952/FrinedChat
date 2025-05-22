import {Component, inject} from '@angular/core';
import {NavigationComponent} from '../../feature/navigation/navigation.component';
import {FriendI} from '../../../model/friend';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf} from '@angular/common';
import {FriendService} from '../../../services/friend.service';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    AsyncPipe,
    NavigationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private fs = inject(FriendService);
  protected readonly friend :Observable<FriendI[]>;

  constructor(){
    this.friend = this.fs.getAllFriend();
  }

}
