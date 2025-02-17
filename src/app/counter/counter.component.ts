import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  imports: [InfoMessageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  private zoneOptOut = inject<NgZone>(NgZone);
  count = signal<number>(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrease() {
    this.count.update((previousCount) => previousCount - 1);
    // console.log(this.count());
  }

  onIncrease() {
    this.count.update((previousCount) => previousCount + 1);
    // console.log(this.count());
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);

    // Avoiding Zone Pollution
    this.zoneOptOut.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expired');
      }, 5000);
    });

    // Change detection is ran after both browser timeouts
    // But with NgZone, the timer expire will not be checked by Zone.js
  }
}
