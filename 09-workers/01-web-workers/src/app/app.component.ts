import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  bigPrime = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 100);
  }

  setBigPrime() {
    // this.bigPrime = findBigPrime();
    const worker = new Worker(
      new URL('big-prime.worker', import.meta.url)
    );

    worker.addEventListener('message', ({data}) => {
      this.bigPrime = data;

      worker.terminate();
    });

    worker.postMessage('hello');
  }
}
