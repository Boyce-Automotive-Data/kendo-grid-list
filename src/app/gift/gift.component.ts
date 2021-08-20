import {Component, OnInit, ViewChild} from '@angular/core';

import {GiftService} from "./gift.service";
import {GiftModel, GiftSizeModel} from "./gift.model";
import {GiftSizesComponent} from "./gift-sizes/gift-sizes.component";

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {
  gift$!: GiftModel;

  giftSizes!: GiftSizeModel[];

  @ViewChild("giftsizes", {static: false}) giftSizesComponent!: GiftSizesComponent;

  constructor(private readonly giftService: GiftService) { }

  async ngOnInit(): Promise<void> {
    this.gift$ = await this.giftService.get(576).toPromise();

    if (this.gift$?.sizes) {
      this.giftSizes = this.gift$.sizes;
    }
  }

  async onSubmit(): Promise<void> {
    this.giftSizes = this.giftSizesComponent.giftSizes;
    console.log(this.giftSizes);
  }
}
