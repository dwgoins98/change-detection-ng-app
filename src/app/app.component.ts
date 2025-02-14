import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'change-detection-ng-app';

  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
