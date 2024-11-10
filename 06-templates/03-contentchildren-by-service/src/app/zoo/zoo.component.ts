import { Component, ContentChildren, QueryList } from '@angular/core';
import { Animal } from '../animal';


@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent {
  @ContentChildren(Animal)
  private animals: QueryList<Animal> | undefined;
  // animals ?

  say() {
    this.animals?.forEach(animal => animal.say());
  }
}
