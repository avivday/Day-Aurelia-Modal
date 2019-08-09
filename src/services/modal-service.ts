import { StylingParams } from 'types/styling-params';
import { ComposeParams } from "types/compose-params";

export class ModalService {

  // modal list (for nested modals)
  modals: ComposeParams[] = [];

  // subscriber to the closing modal id
  closingModalSubscriber: any;


  /**
   * trigger opening a modal using compose from params
   * @param composeParams (viewModel?, view?, model?)
   * @param stylingParams (height, width, minHeight, minWidth)
   */
  openModal(composeParams: ComposeParams, stylingParams?: StylingParams) {
    // push modal params to array including the style

    const modalParams = {
      viewModel: composeParams.viewModel,
      view: composeParams.view,
      model: composeParams.model,
      styling: stylingParams
    }
    this.modals.push(modalParams);
  }

  closeModal(retVal?: any) {
    this.modals.pop();
    // TODO: return promise to use retval
  }

}
