import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewMessageComponent {
  private messageService = inject(MessagesService);
  // add = output<string>();
  enteredText = signal<string>('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText());
    this.messageService.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
