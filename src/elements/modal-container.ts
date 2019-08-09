import { ModalService } from 'services/modal-service';
import {  autoinject } from 'aurelia-framework';

@autoinject()
export class ModalContainer {

  constructor(public modalService: ModalService) {}

}
