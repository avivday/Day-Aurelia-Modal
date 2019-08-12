import { ModalService } from '../services/modal-service';
import { StylingParams } from '../types/styling-params';
import { bindable, computedFrom, autoinject } from 'aurelia-framework';

@autoinject()
export class Modal {
  // Modal Params
  @bindable()
  public viewModel: string;
  @bindable()
  public view: string;
  @bindable()
  public model: any;

  @bindable()
  public styling: StylingParams;

  public maximize: boolean = false;

  constructor(private modalService: ModalService) {}

  @computedFrom("styling", "maximize")
  get modalCSS() {
    return {
      direction: this.styling.direction,
      minHeight: this.styling.minHeight,
      maxHeight: this.styling.maxHeight,
      height: this.maximize ? this.styling.maximizeHeight : this.styling.height,
      minWidth: this.styling.minWidth,
      maxWidth: this.styling.maxWidth,
      width: this.maximize ? this.styling.maximizeWidth : this.styling.width
    }
  }

  @computedFrom("styling")
  get modalHeaderCSS() {
    return {
      background: this.styling.headerBackground,
      color: this.styling.headerColor
    }
  }

  /**
   * Close this modal directly from html
   */
  closeModal() {
    return this.modalService.closeModal();
  }

  /**
   * Close all modals directly from html
   */
  closeAllModals() {
    return this.modalService.closeAllModals();
  }
}
