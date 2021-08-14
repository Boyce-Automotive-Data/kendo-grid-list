import { Component, OnInit } from '@angular/core';

import {GiftService} from "./gift.service";
import {GiftModel, GiftSizeModel} from "./gift.model";

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {
  gift$!: GiftModel;

  giftSizes!: GiftSizeModel[];

  constructor(private readonly giftService: GiftService) { }

  async ngOnInit(): Promise<void> {
    this.gift$ = await this.giftService.get(576).toPromise();

    if (this.gift$?.sizes) {
      this.giftSizes = this.gift$.sizes;
    }
  }
}
