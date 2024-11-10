import { Component, inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DeclaratedComponent } from './declarated/declarated.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: 'name',
      useValue: 'AppComponent',
    }
  ]
})
export class AppComponent {
  title = 'insert-stand';

  // readonly injector = inject(Injector);
  readonly injector = Injector.create({
    parent: inject(Injector),
    providers: [
      {
        provide: 'name',
        useValue: 'Egor',
      }
    ]
  });

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  readonly component$ = from(
    import('./undeclarated/undeclarated.component').then(m => m.UndeclaratedComponent)
  )

  onClickComponent() {
    // const compRef = this.container.createComponent(DeclaratedComponent);

    // console.log(compRef);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: 'name',
          useValue: 'Egor',
        }
      ]
    })

    import('./undeclarated/undeclarated.component').then(m => {
      const ref = this.container.createComponent(m.UndeclaratedComponent, {injector: injector});

      console.log(ref);
    })
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    const viewRef = this.container.createEmbeddedView(template, {$implicit: 'Egor', name: 'Egor new'});

    console.log(viewRef);
  }

  onClickClear() {
    this.container.clear();
  }

}
