import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/websocket.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: string[] = [];

  constructor(private wsService: WebSocketService) {}

  ngOnInit(): void {
    this.wsService.getMessages().subscribe((message: any) => {
      this.messages.push(message.message);
    });
  }

  sendMessage(message: string): void {
    this.wsService.sendMessage(message);
  }
}
