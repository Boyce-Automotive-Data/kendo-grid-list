import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {SizesService} from "../sizes.service";
import {GiftSizeModel} from "../gift.model";
import {SizeModel} from "../size.model";

const createFormGroup = (dataItem: GiftSizeModel) =>
  new FormGroup({
    sizeId: new FormControl(dataItem.sizeId, [Validators.required]),
    maxLimit: new FormControl(dataItem.maxLimit, [Validators.required]),
    stock: new FormControl(dataItem.stock, [Validators.required]),
    status: new FormControl(dataItem.status, [Validators.required]),
  });

@Component({
  selector: 'app-gift-sizes',
  templateUrl: './gift-sizes.component.html',
  styleUrls: ['./gift-sizes.component.scss']
})
export class GiftSizesComponent implements OnInit {
  @Input() public giftSizes!: GiftSizeModel[];

  sizes!: SizeModel[];

  private editedRowIndex: number | undefined;
  public form: FormGroup | undefined;

  constructor(private readonly service: SizesService) { }

  async ngOnInit(): Promise<void> {
    this.sizes = await this.service
      .list()
      .toPromise();
    console.log(this.sizes);
  }

  public size(id: number): SizeModel | undefined {
    return this.sizes?.find((x) => x.sizeId === id);
  }

  public addHandler({ sender }: any): void {
    this.closeEditor(sender);

    this.form = createFormGroup(({
      sizeId: null,
      maxLimit: 0,
      stock: 0,
      status: 'Active',
    } as unknown) as GiftSizeModel);

    sender.addRow(this.form);
  }

  public editHandler({ sender, rowIndex, dataItem }: any): void {
    this.closeEditor(sender);
    console.log(dataItem);
    this.form = createFormGroup(dataItem);
    console.log(this.form);

    this.editedRowIndex = rowIndex;
    console.log(this.editedRowIndex);

    sender.editRow(rowIndex, this.form);
  }

  public cancelHandler({ sender, rowIndex }: any): void {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, isNew }: any): void {
    const giftSize = this.form?.value;

    console.log(isNew);
    console.debug(giftSize);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }: any): void {
    console.log(dataItem);
  }

  private closeEditor(grid: any, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.form = undefined;
  }


}
