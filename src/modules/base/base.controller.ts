import { ContainerBuilder } from 'node-dependency-injection';
import { diContainer } from './base.container';
export class BaseController {
  protected diContainer: ContainerBuilder;

  constructor() {
    this.diContainer = diContainer();
  }

}
