import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-message',
  imports: [MessagesListComponent, NewMessageComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // Using OnPush change detection to update Messages component only when the there is a change
})
export class MessageComponent {
  // messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  // onAddMessage(message: string){
  //   this.messages.update((oldMessages) => [...oldMessages, message])
  // }
}
