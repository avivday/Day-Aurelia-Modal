import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";

@autoinject()
export class App {

  constructor(private modalService: ModalService) { }


  open() {
    this.modalService.openModal({viewModel: "test-modal/test-modal"}, {direction: "rtl"})
    .then(data => {
      console.log("First modal closed, here is the data you chose to send:", data);
    });
  }
}
