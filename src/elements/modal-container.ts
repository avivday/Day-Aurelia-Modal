import { ModalService } from '../services/modal-service';
import {  autoinject } from 'aurelia-framework';

@autoinject()
export class ModalContainer {

    constructor(private modalService: ModalService) {}

    closeModalWhenEscapeClicked(closeWhenEscapeClicked, $event) {
      if(closeWhenEscapeClicked) {
        $event.keyCode === 27 ? this.modalService.closeModal() : null;
      }
      
      return true;
    }
    
    closeModalOnOverlayClick(closeWhenOverlayClicked) {
      closeWhenOverlayClicked ? this.modalService.closeModal() : null;
    }


}
