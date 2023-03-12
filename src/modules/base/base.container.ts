import { isNil } from 'lodash';
import { ContainerBuilder } from 'node-dependency-injection';

let _diContainer = null;

export const diContainer = (): ContainerBuilder => {
  if ( isNil( _diContainer )) {
    _diContainer = new ContainerBuilder();
  }

  return _diContainer;
}
