import { StylingParams } from 'types/styling-params';
import { ComposeParams } from "types/compose-params";

export class ModalService {

  // modal list (for nested modals)
  modals: ComposeParams[] = [];


  /**
   * trigger opening a modal using compose from params
   * @param composeParams (viewModel?, view?, model?)
   * @param stylingParams (minHeight, maxHeight, height, minWidth, maxWidth, width)
   */
  openModal(composeParams: ComposeParams, stylingParams?: StylingParams) {
    // push modal params to array including the style
    // if no stylingparams given, send empty object that will be init on the modal itself

    let defaultStylingValues: StylingParams = {
      width: "50vw",
      minWidth: "unset",
      maxWidth: "100%",
      height: "50vh",
      minHeight: "unset",
      maxHeight: "100%",
      opacity: "0.5"
    };

    if(stylingParams) {
      defaultStylingValues.width = stylingParams.width;
      defaultStylingValues.minWidth = stylingParams.minWidth;
      defaultStylingValues.maxWidth = stylingParams.maxWidth;
      defaultStylingValues.height = stylingParams.height;
      defaultStylingValues.minHeight = stylingParams.minHeight;
      defaultStylingValues.maxHeight = stylingParams.maxHeight;
      defaultStylingValues.opacity = stylingParams.opacity;
    }

    const modalParams = {
      viewModel: composeParams.viewModel,
      view: composeParams.view,
      model: composeParams.model,
      styling: defaultStylingValues
    }
    this.modals.push(modalParams);
  }

  closeModal(retVal?: any) {
    this.modals.pop();
    // TODO: return promise to use retval
  }

}
