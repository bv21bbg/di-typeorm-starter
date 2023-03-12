import { registerRoutes } from '@sc/decorators';
import { BaseModule } from '@scModules/base/base.module';
import { TenantsModule } from '@scModules/tenants';

export class MainModule extends BaseModule {
  private app: any;

  constructor( app ) {
    super();
    this.app = app;
  }

  setUp() {
    this.name = 'main';
    this.modules = {
      TenantsModule
    };
  }

  prepareRoutes(): void {
    registerRoutes( this.app );
  }

}
