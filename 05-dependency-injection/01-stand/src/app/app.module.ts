import { inject, Inject, Injectable, InjectionToken, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostComponent } from './host/host.component';

class Depend {}

// @Injectable()
class Test {
  readonly depend = inject(Depend);

  // constructor(readonly depend: Depend) {}
}

class Child extends Test {
  // constructor(readonly depend: Depend) {
  //   super(depend);
  // }
}

@NgModule({
  declarations: [
    AppComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly moduleInjector: Injector) {
    const TOKEN = new InjectionToken('Token');
    const COPY_TOKEN = new InjectionToken('Token copy');
    const DELAY_TOKEN = new InjectionToken('DELAY_TOKEN');

    // SharedRequestModule.injector.get();

    const parentInjector = Injector.create({
      providers: [Test]
    })

    const injector = Injector.create({
      parent: parentInjector,
      providers: [
        // {
        //   provide: Test,
        //   useClass: Test,
        // },
        {
          provide: TOKEN,
          // useValue: 'Token value',
          useValue: {},
        },
        {
          provide: COPY_TOKEN,
          // useExisting: TOKEN,
          useExisting: Test,
        },
        {
          provide: DELAY_TOKEN,
          // useFactory: () => inject(Test),
          useFactory: () => {
            console.log('Created dalay token value');

            return 'Dealay token value';
          },
        }
      ]
    })

    console.log(injector.get(Test));
    // console.log(injector.get(Test) === injector.get(DELAY_TOKEN));

    // setTimeout(() => {
    //   console.log(injector.get(DELAY_TOKEN));
    // }, 3000)
  }
}
