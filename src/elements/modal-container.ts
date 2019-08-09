import { ModalService } from 'services/modal-service';
import {  autoinject } from 'aurelia-framework';

@autoinject()
export class ModalContainer {

  constructor(public modalService: ModalService) {}

  closeModal(modalID: number) {
    // TODO: close modal when clicking on overlay, consider using event.stopPropagation();
    // this.modalService.closeModal(modalID);
  }

}
