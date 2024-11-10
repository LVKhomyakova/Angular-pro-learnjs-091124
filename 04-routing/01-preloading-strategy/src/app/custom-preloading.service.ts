import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, load$: () => Observable<any>): Observable<any> {
    if (route.data?.['preload']) {
      console.log('Preload ', route.path);

      return load$();
    }

    console.log('No preloading', route.path);

    // return of(null);
    return EMPTY;
  }
}
