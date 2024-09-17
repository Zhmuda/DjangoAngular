import { WebSocketSubject } from 'rxjs/webSocket';

export class ChatService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:8000/ws/chat/');
  }

  sendMessage(message: string) {
    this.socket$.next({ message });
  }

  getMessages() {
    return this.socket$.asObservable();
  }
}
