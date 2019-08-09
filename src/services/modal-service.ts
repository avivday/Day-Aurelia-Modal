import { ComposeParams } from "types/compose-params";

export class ModalService {

  // modal list (for nested modals)
  modals: ComposeParams[] = [];

  // subscriber to the closing modal id
  closingModalSubscriber: any;

  modalID: number;


  /**
   * trigger opening a modal using compose from params
   * @param composeParams (id, viewModel?, view?, model?)
   */
  openModal(composeParams: ComposeParams) {
    // push modal params to array
    this.modals.push(composeParams);
  }

  closeModal(retVal?: any) {
    this.modals.pop();
    // TODO: return promise to use retval
  }

}
