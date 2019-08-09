import {bindable, computedFrom} from 'aurelia-framework';

export class Modal {
  // Modal Params
  @bindable()
  public viewModel: string;
  @bindable()
  public view: string;
  @bindable()
  public model: any;


}
