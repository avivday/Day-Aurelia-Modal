import { EventAggregator } from 'aurelia-event-aggregator';
import { ComposeParams } from "types/compose-params";
import { autoinject } from 'aurelia-framework';

@autoinject()
export class ModalService {

  constructor(private ea: EventAggregator) {}

  // modal list (for nested modals)
  modals: ComposeParams[] = [];

  /**
   * trigger opening a modal using compose from params
   * @param composeParams (id, viewModel?, view?, model?)
   */
  openModal(composeParams: ComposeParams) {

    /**
     * Modal gets his id by the modals array length.
     * Starting from 0 - which is also his place in the array.
     * Close function becomes easier because we just need to splice the modals array using the modal id.
     */

    const modalParams = {
      id: this.modals.length,
      viewModel: composeParams.viewModel,
      view: composeParams.view,
      model: composeParams.model
    }

    // push modal params to array
    this.modals.push(modalParams);
  }

  /**
   *
   * @param modalID modal ID
   */
  closeModal(modalID: number) {
    this.modals.splice(modalID, 1);
  }


}
