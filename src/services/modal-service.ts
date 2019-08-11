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
      modalName: "My Modal",
      uniqueBodyClass: "",
      uniqueHeaderClass: "",
      width: "50vw",
      minWidth: "unset",
      maxWidth: "100%",
      height: "50vh",
      minHeight: "unset",
      maxHeight: "100%",
      opacity: "0.5",
      headerBackgroundColor: "#003366",
      headerColor: "#fff",
      maximizeHeight: "95%",
      maximizeWidth: "95%",
      showHeader: true,
      showMaximize: true
    };

    // combine the given values with the defaults.
    defaultStylingValues = Object.assign(defaultStylingValues, stylingParams);

    // combine compose params with styling
    const modalParams = {
      viewModel: composeParams.viewModel,
      view: composeParams.view,
      model: composeParams.model,
      styling: defaultStylingValues
    }

    // push as a new modal
    this.modals.push(modalParams);
  }

  /**
   * Close this modal and send some data if you want
   * @param retVal Send return value when closing a modal
   */
  closeModal(retVal?: any): Promise<{}> {
    this.modals.pop();
    return new Promise( (res, rej) => {
      res(retVal);
    });
  }

  /**
   * Close all modals and also send data if you want.
   * @param retVal Send return value when closing all modals
   */
  closeAllModals(retVal?: any): Promise<{}> {
    this.modals = [];
    return new Promise( (res, rej) => {
      res(retVal);
    });
  }

}
