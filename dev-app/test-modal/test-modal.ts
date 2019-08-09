import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";

@autoinject()
export class TestModal {

  constructor(private modalService: ModalService) { }

  open() {
    this.modalService.openModal({viewModel: "test-modal/inside-modal/inside-modal"});
  }

  close() {
    const objToSend = {1: "test", 2: "test"};
    this.modalService.closeModal(objToSend);
  }
}
