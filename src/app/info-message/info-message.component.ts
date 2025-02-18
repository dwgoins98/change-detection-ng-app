import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-info-message',
  imports: [],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoMessageComponent {
  isClicked: boolean = false;
  clickCount = signal<number>(0);

  clickMessage = signal<string>('');

  get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return 'InfoMessage Component Debug Output';
  }

  onClick() {
    this.isClicked = true;
    this.clickCount.update((oldClickCount) => oldClickCount + 1);
    this.clickMessage.set(`Clicked ${this.clickCount()} times`);
  }
}
