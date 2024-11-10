import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit, AfterViewInit {
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild(CatComponent, {static: true, read: ElementRef})
  // private staticCatComponent: ElementRef | undefined;

  // @ViewChild(CatComponent, {static: false, read: ElementRef})
  // private dynamicCatComponent: ElementRef | undefined;

  // constructor() {
  //   console.log('constructor: staticCatComponent', this.staticCatComponent);
  //   console.log('constructor: dynamicCatComponent', this.dynamicCatComponent);
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit: staticCatComponent', this.staticCatComponent);
  //   console.log('ngOnInit: dynamicCatComponent', this.dynamicCatComponent);
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit: staticCatComponent', this.staticCatComponent);
  //   console.log('ngAfterViewInit: dynamicCatComponent', this.dynamicCatComponent);
  // }
}
