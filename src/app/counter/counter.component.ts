import { Component, signal } from '@angular/core';
import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  imports: [InfoMessageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrease() {
    this.count.update((previousCount) => previousCount - 1);
    console.log(this.count());
  }

  onIncrease() {
    this.count.update((previousCount) => previousCount + 1);
    console.log(this.count());
  }
}
