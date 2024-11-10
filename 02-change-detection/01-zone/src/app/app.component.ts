import { ApplicationRef, Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  private readonly ngZone = inject(NgZone);
  private readonly applicationRef = inject(ApplicationRef);

  constructor() {
    // this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter += 1;

        this.applicationRef.tick();
        
        console.log('Increment constructor');
      }, 500)
    // })
  }

  onClick() {
    this.counter += 1;
    this.applicationRef.tick();

    console.log('Increment');
  }
}
