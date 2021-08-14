import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {GiftModel} from "./gift.model";

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http: HttpClient) { }

  get(id: number): Observable<GiftModel> {
    return this.http.get(`./data/gift_${id}.json`)
      .pipe(
        map((data) => data as GiftModel),
        catchError((error: any) => {
          console.log(error);
          return of({} as GiftModel);
        })
      );
  }
}
