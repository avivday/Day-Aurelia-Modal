import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";

@autoinject()
export class TestModal {

  constructor(private modalService: ModalService) { }

  open() {
    this.modalService.openModal({viewModel: "test-modal/inside-modal/inside-modal"});
  }
}
