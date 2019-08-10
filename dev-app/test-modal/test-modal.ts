import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";
import { StylingParams } from 'types/styling-params';

@autoinject()
export class TestModal {

  constructor(private modalService: ModalService) { }


  styling: StylingParams = {
    minHeight: "300px",
    width: "600px"
  };

  open() {
    this.modalService.openModal({viewModel: "test-modal/inside-modal/inside-modal"}, this.styling);
  }

  close() {
    const objToSend = {1: "test", 2: "test"};
    this.modalService.closeModal(objToSend);
  }
}
