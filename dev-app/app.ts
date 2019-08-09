import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";

@autoinject()
export class App {

  constructor(private modalService: ModalService) { }

  modalContainer: HTMLElement;

  open() {
    this.modalService.openModal({viewModel: "test-modal/test-modal"});
  }
}
