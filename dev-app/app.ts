import { StylingParams } from 'types/styling-params';
import { autoinject } from 'aurelia-framework';
import { ModalService } from "services/modal-service";

@autoinject()
export class App {

  constructor(private modalService: ModalService) { }


  open() {
    this.modalService.openModal({viewModel: "test-modal/test-modal"}, {uniqueClass: "my-modal-class"});
  }
}
