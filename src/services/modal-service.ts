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
      uniqueClass: "",
      width: "50vw",
      minWidth: "unset",
      maxWidth: "100%",
      height: "50vh",
      minHeight: "unset",
      maxHeight: "100%",
      opacity: "0.5",
      showHeader: true
    };

    // if you send styling params, check each one, if param is not empty, send it, else, send default value.
    // else, send all defaults.
    if(stylingParams) {
      defaultStylingValues.modalName = stylingParams.modalName ? stylingParams.modalName : defaultStylingValues.modalName;
      defaultStylingValues.uniqueClass = stylingParams.uniqueClass ? stylingParams.uniqueClass : defaultStylingValues.uniqueClass;
      defaultStylingValues.width = stylingParams.width ? stylingParams.width : defaultStylingValues.width;
      defaultStylingValues.minWidth = stylingParams.minWidth ? stylingParams.minWidth : defaultStylingValues.minWidth;
      defaultStylingValues.maxWidth = stylingParams.maxWidth ? stylingParams.maxWidth : defaultStylingValues.maxWidth;
      defaultStylingValues.height = stylingParams.height ? stylingParams.height : defaultStylingValues.height;
      defaultStylingValues.minHeight = stylingParams.minHeight ? stylingParams.minHeight : defaultStylingValues.minHeight;
      defaultStylingValues.maxHeight = stylingParams.maxHeight ? stylingParams.maxHeight : defaultStylingValues.maxHeight;
      defaultStylingValues.opacity = stylingParams.opacity ? stylingParams.opacity : defaultStylingValues.opacity;
      defaultStylingValues.showHeader = stylingParams.showHeader !== undefined ? stylingParams.showHeader : defaultStylingValues.showHeader;
    }

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
