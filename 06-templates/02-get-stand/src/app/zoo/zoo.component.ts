import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { CatComponent } from '../animals/cat/cat.component';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent implements AfterContentInit, OnInit {
  @ContentChild(CatComponent, {static: true, read: ElementRef})
  private staticCatComponent: ElementRef | undefined;

  @ContentChild(CatComponent, {static: false, read: ElementRef})
  private dynamicCatComponent: ElementRef | undefined;

  constructor() {
    console.log('constructor: staticCatComponent', this.staticCatComponent);
    console.log('constructor: dynamicCatComponent', this.dynamicCatComponent);
  }

  ngOnInit(): void {
    console.log('ngOnInit: staticCatComponent', this.staticCatComponent);
    console.log('ngOnInit: dynamicCatComponent', this.dynamicCatComponent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: staticCatComponent', this.staticCatComponent);
    console.log('ngAfterContentInit: dynamicCatComponent', this.dynamicCatComponent);
  }
}
