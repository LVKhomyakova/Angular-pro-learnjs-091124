import { ApplicationRef, Component, inject } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { concat, filter, first, from, interval, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor() {
    const swUpdate = inject(SwUpdate);

    swUpdate.versionUpdates.pipe(
      tap(value => {
        console.log(value);
      }),
      filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'),
    ).subscribe(() => {
      if (confirm('Есть новая версия приложения, перезагрузить страницу?')) {
        document.location.reload();
      }
    });

    // // interval(1000).subscribe(console.log)
    // // swUpdate.checkForUpdate().then(console.log);
    // const appIsStable$ = inject(ApplicationRef).isStable.pipe(first(isStable => isStable));
    // const everyTwoHouse$ = interval(1000 * 60 * 60 * 2);
    // // const everyTwoHouse$ = interval(1000 * 10);
    // const everyTwoHouseOnceAppIsStable$ = concat(appIsStable$, everyTwoHouse$);

    // everyTwoHouseOnceAppIsStable$
    //   .pipe(switchMap(() => from(swUpdate.checkForUpdate())))
    //   .subscribe({
    //     next: needUpdate => {
    //       if (!needUpdate) {
    //         console.log('No updates')

    //         return;
    //       }
  
    //       if (confirm('Есть новая версия приложения, перезагрузить страницу?')) {
    //         document.location.reload();
    //       }
    //     },
    //     error: error => {
    //       console.error(error);
    //     }
    //   })

    Notification.requestPermission().then(permissionResult => {
      if (permissionResult === 'granted') {
        console.log('Cant show notification');
      }
    })

    const swPush = inject(SwPush);

    swPush.messages.subscribe(console.log);

    swPush.requestSubscription({serverPublicKey}).then(pushSubscription => {
      // pushSubscription.
    });
  }
}
