import {Component, inject, OnInit} from '@angular/core';
import {FriendService} from '../../../services/friend.service';
import {FriendI} from '../../../model/friend';
import {NgForOf} from '@angular/common';
import {Message, MessageDTO, SimpleMessageDTO} from '../../../model/message.model';
import {MessageService} from '../../../services/message.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-message-page',
  imports: [
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './message.page.component.html',
  styleUrl: './message.page.component.css'
})
export class MessagePageComponent implements OnInit {

  ngOnInit(): void {
    setInterval(() => {
      this.refreshMessages();
    }, 1000);
  }

  private readonly fs = inject(FriendService);
  private readonly ms = inject(MessageService);
  protected friends?: FriendI[];
  protected friend?: FriendI;
  protected messages?: Message[];
  protected saveMessage?: SimpleMessageDTO;

  constructor() {
    this.fs.getAllFriend().subscribe({
      next: (result: FriendI[]) => {
        this.friends = result
      }
    });
  }


  chooseFriend(f: FriendI) {
    this.friend = f;
    let messagesDTO: MessageDTO = {
      userId: f.friend.id,
      friendId: f.user.id,
    }
    this.ms.getAllMessages(messagesDTO).subscribe({
        next: (result: Message[]) => {
          this.messages = result
        }
      }
    );
    this.saveMessage = {
      userId: f.friend.id,
      friendId: f.user.id,
      message: ""
    }
  }

  sendMessage() {
    if (this.saveMessage!.message.length !== 0) {
      this.ms.saveAllMessages(this.saveMessage!)
      this.saveMessage!.message = "";
    }
  }

  refreshMessages() {
    if (this.friend) {
      let messagesDTO: MessageDTO = {
        userId: this.friend.friend.id,
        friendId: this.friend.user.id,
      };
      this.ms.getAllMessages(messagesDTO).subscribe({
        next: (messagesDTO: Array<Message>) => {
          if (JSON.stringify(this.messages) !== JSON.stringify(messagesDTO)) {
            this.messages = messagesDTO;
          }
        }
      });

    }
  }

}


