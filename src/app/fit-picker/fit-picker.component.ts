import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fit, FitGroup, Variant } from '../model/fit';

export class FitUrlChangedEvent {
  public url!: string;
  public fitGroupName!: string;
}

@Component({
  selector: 'app-fit-picker',
  templateUrl: './fit-picker.component.html',
  styleUrls: ['./fit-picker.component.css']
})
export class FitPickerComponent implements OnInit {

  @Input()
  fitGroup!: FitGroup;

  @Output()
  fitUrlChanged: EventEmitter<FitUrlChangedEvent> = new EventEmitter<FitUrlChangedEvent>();

  selectedFit: Fit | null = null;
  selectedVariant: Variant | null = null;

  constructor() { }

  ngOnInit(): void {

  }

  onFitChange() {
    if(this.selectedFit && this.selectedFit.variants.length > 0) {
      this.selectedVariant = this.selectedFit?.variants[0];
      this.fitUrlChanged.emit({
        url: this.selectedVariant.url,
        fitGroupName: this.fitGroup.name
      });
    } else {
      this.fitUrlChanged.emit({
        url: '',
        fitGroupName: this.fitGroup.name
      })
    }
  }

  onVariantChange() {
    if(this.selectedVariant) {
      this.fitUrlChanged.emit({
        url: this.selectedVariant.url,
        fitGroupName: this.fitGroup.name
      });
    }
  }
}
