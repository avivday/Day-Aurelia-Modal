import {bindable} from 'aurelia-framework';

export class Modal {
  @bindable viewModel: string;
  @bindable view: string;
  @bindable model: any;

}
