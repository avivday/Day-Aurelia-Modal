import { StylingParams } from 'types/styling-params';
import { ComposeParams } from "types/compose-params";

export class ModalService {

  // modal list (for nested modals)
  modals: ComposeParams[] = [];

  // default styling values if others has not been given
  defaultStylingValues: StylingParams = {
    width: "50vw",
    minWidth: "36rem",
    maxWidth: "100%",
    height: "50vh",
    minHeight: "32rem",
    maxHeight: "100%",
    opacity: "0.5"
  }

  /**
   * trigger opening a modal using compose from params
   * @param composeParams (viewModel?, view?, model?)
   * @param stylingParams (minHeight, maxHeight, height, minWidth, maxWidth, width)
   */
  openModal(composeParams: ComposeParams, stylingParams?: StylingParams) {
    // push modal params to array including the style
    // if no stylingparams given, send empty object that will be init on the modal itself
    const modalParams = {
      viewModel: composeParams.viewModel,
      view: composeParams.view,
      model: composeParams.model,
      styling: stylingParams ? stylingParams : this.defaultStylingValues
    }
    this.modals.push(modalParams);
  }

  closeModal(retVal?: any) {
    this.modals.pop();
    // TODO: return promise to use retval
  }

}
