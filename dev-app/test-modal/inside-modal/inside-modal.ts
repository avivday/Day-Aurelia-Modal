import { ModalService } from 'services/modal-service';
import { autoinject } from "aurelia-framework";

@autoinject()
export class InsideModal {

  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.closeModal();
  }

}
