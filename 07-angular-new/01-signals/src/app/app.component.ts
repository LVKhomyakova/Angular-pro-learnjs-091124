import { ChangeDetectionStrategy, Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // title = 'signals';
  get title(): string {
    console.log('CD called');

    return 'signals';
  }

  readonly count: WritableSignal<number> = signal(0);

  constructor() {
    // const count = signal(0);

    // console.log(count());

    // count.set(5);

    // console.log(count());

    // count.update(value => value + 1);

    // console.log(count());

    setInterval(() => {
      this.count.update(value => value + 1);

      // console.log(this.count());
    }, 500)

    // const doubleCountSignal: Signal<number> = computed(() => {
    //   console.log('Calculated');

    //   return this.count() * 2
    // });

    // console.log(doubleCountSignal());
    // console.log(doubleCountSignal());
    // console.log(doubleCountSignal());
    // console.log(doubleCountSignal());

    // this.count.set(5);

    // console.log(this.count());

    // this.count.update(value => value + 1);

    // console.log(this.count());

    // console.log(doubleCountSignal());
    // console.log(doubleCountSignal());
    // console.log(doubleCountSignal());
    // console.log(doubleCountSignal());

    // const showCount = signal(false);
    // const conditionalCount = computed(() => {
    //   if (showCount()) {
    //     return `The count is ${this.count()}`;
    //   }

    //   return `Noting`;
    // })

    // console.log(conditionalCount());

    const effectInstance = effect((onCleanup) => {
      console.log(`Current count: ${this.count()}`);

      const timer = setTimeout(() => {
        // ...
      }, 1000);

      onCleanup(() => {
        clearTimeout(timer);

        console.log('Effect destroyed');
      });
    });

    setTimeout(() => {
      effectInstance.destroy();
    }, 5000)
  }
}
