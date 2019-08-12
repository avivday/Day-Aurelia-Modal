import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/modal-container')
  ]);
}

export * from './services/modal-service';
export * from './types/compose-params';
export * from 'types/styling-params';
