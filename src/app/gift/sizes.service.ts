import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { SizeModel } from './size.model';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private http: HttpClient) { }

  list(): Observable<SizeModel[]> {
    return this.http.get('./data/sizes.json')
      .pipe(
      map((data) => data as SizeModel[]),
        catchError((error: any) => {
        console.log(error);
        return of([] as SizeModel[]);
      })
    );
  }
}
