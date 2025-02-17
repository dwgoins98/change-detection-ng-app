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
  /**
   * NgZone instance to run code outside of Angular's zone to avoid triggering change detection.
   * @private
   */
  private zoneOptOut = inject<NgZone>(NgZone);

  /**
   * The current count value.
   */
  count = signal<number>(0);

  /**
   * A debug output message for the component.
   * Logs a message to the console whenever it is re-evaluated.
   * 
   * @returns A string containing the debug output message.
   */
  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  /**
   * Decreases the count by 1.
   */
  onDecrease() {
    this.count.update((previousCount) => previousCount - 1);
  }

  /**
   * Increases the count by 1.
   */
  onIncrease() {
    this.count.update((previousCount) => previousCount + 1);
  }

  /**
   * Initializes the component.
   * Sets the initial count to 0 after 4 seconds and logs a message after 5 seconds without triggering Angular's change detection.
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);

    this.zoneOptOut.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expired');
      }, 5000);
    });
  }
}
