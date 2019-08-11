import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";
import { StylingParams } from 'types/styling-params';

@autoinject()
export class TestModal {

  constructor(private modalService: ModalService) { }


  styling: StylingParams = {
    minHeight: "300px",
    width: "600px",
    showHeader: false
  };

  openModal() {
    this.modalService.openModal({viewModel: "test-modal/inside-modal/inside-modal"}, this.styling)
    .then(data => {
      console.log("inner was closed", data);
    });
  }

  closeWithData() {
    this.modalService.closeModal(this.styling);
  }
}
