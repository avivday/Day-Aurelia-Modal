import { ModalService } from 'services/modal-service';
import { autoinject } from "aurelia-framework";

@autoinject()
export class InsideModal {

  constructor(private modalService: ModalService) {}

  someData = {
    name: "Some",
    last: "Data"
  };

  closeAllAndSendData() {
    this.modalService.closeAllModals(this.someData)
    .then(data => console.log(data));
  }
}
