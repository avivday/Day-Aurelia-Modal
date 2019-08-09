import { ModalService } from './../services/modal-service';
import {bindable, autoinject} from 'aurelia-framework';

@autoinject()
export class Modal {
  // Modal Params
  @bindable id: number;
  @bindable viewModel: string;
  @bindable view: string;
  @bindable model: any;

  // Modal Styling Binds
  @bindable height: string;

  modalCss: string;

  constructor(private modalService: ModalService) {
  }

  closeModal() {
    this.modalService.closeModal(this.id);
  }
}
