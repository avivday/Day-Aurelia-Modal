import { ComposeParams } from "types/compose-params";

export class ModalService {
  // modal list (for nested modals)
  modals = [];


  /**
   * trigger opening a modal using compose from params (viewModel?, view?, model?)
   * @param openModalParams
   */
  openModal(openModalParams: ComposeParams) {
    this.modals.push(openModalParams);
  }

}
