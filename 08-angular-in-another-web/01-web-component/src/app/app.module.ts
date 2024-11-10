import { inject, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    HelloComponent
  ]
})
export class AppModule {
  constructor() {
    const injector = inject(Injector);

    const helloElement = createCustomElement(HelloComponent, {injector});

    customElements.define('custom-hello', helloElement);
  }

  ngDoBootstrap() {}
}
