import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";

@autoinject()
export class App {

  constructor(private modalService: ModalService) { }


  open() {
    this.modalService.openModal({viewModel: "test-modal/test-modal"}, {uniqueBodyClass: "my-modal-class", headerBackgroundColor: "#000", headerColor: "#fff"})
    .then(data => {
      console.log("outer was closed", data);
    });
  }
}
