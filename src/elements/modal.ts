import { StylingParams } from './../types/styling-params';
import { bindable, computedFrom } from 'aurelia-framework';

export class Modal {
  // Modal Params
  @bindable()
  public viewModel: string;
  @bindable()
  public view: string;
  @bindable()
  public model: any;

  @bindable()
  public styling: StylingParams;

  @computedFrom("styling")
  get modalCSS() {
    return {
      minHeight: this.styling.minHeight,
      maxHeight: this.styling.maxHeight,
      height: this.styling.height,
      minWidth: this.styling.minWidth,
      maxWidth: this.styling.maxWidth,
      width: this.styling.width
    }
  }

}
