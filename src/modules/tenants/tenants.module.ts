import { TenantsService } from './tenants.service';
import { BaseModule } from '@scModules/base/base.module';
import { TenantsController } from './tenants.controller';

export class TenantsModule extends BaseModule {

  setUp() {
    this.name = 'tenants';
    this.providers = {
      TenantsService
    };
    this.controllers = {
      TenantsController
    };
  }

}
