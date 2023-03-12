import { isEmpty } from 'lodash';
import { ContainerBuilder, Definition } from 'node-dependency-injection';
import { diContainer } from './base.container';
import { IBaseModule } from './base.types';

export class BaseModule implements IBaseModule {
  protected name: string = 'base';
  protected routes: string[] = [];
  protected entities: any[] = [];

  protected providers: Record<string, any>;
  protected controllers: Record<string, any>;
  protected modules: Record<string, any>;
  protected diContainer: ContainerBuilder;

  constructor() {
    this.setUp();
    this.initModules();
    this.initProviders();
    this.initControllers();
  }

  setUp() {}

  initModules() {
    if ( isEmpty( this.modules )) {
      console.log( `[${this.name} module] no modules`, this.modules );
      return;
    }
    console.log( `[${this.name} module] init modules`, this.modules );
    for ( let key of Object.keys( this.modules )) {
      const
        Module = this.modules[ key ],
        moduleIntance = new Module();
      console.log( `# register di module.${key}` );
      diContainer().register( `module.${key}`, moduleIntance );
    }
  }

  initProviders() {
    if ( isEmpty( this.providers )) {
      console.log( `[${this.name} module] no providers`, this.providers );
      return;
    }

    for ( let key of Object.keys( this.providers )) {
      const
        Provider = this.providers[ key ],
        definition = new Definition( Provider );

      console.log( `# register di ${this.name}.providers.${key}` );
      // diContainer().register( `${this.name}.providers.${key}`, Provider );
      diContainer().setDefinition( `${this.name}.providers.${key}`, definition );
    }
    console.log( `[${this.name} module] init providers`, this.providers );
  }

  initControllers() {
    if ( isEmpty( this.controllers )) {
      console.log( `[${this.name} module] no controllers`, this.controllers );
      return;
    }

    console.log( `[${this.name} module] init controllers`, this.controllers );
    for ( let key of Object.keys( this.controllers )) {
      const
        Controller = this.controllers[ key ],
        definition = new Definition( Controller );

      definition.lazy = true;

      console.log( `# register di ${this.name}.controllers.${key}` );
      // diContainer().register( `${this.name}.controllers.${key}`, Controller );
      diContainer().setDefinition( `${this.name}.controllers.${key}`, definition );
    }
  }

  registerRoutes( app ) {
    for ( let route of this.routes ) {
      console.log( '[registerRoutes] route: ', route );
    }
  }

  getEntities() {
    return this.entities;
  }
}
