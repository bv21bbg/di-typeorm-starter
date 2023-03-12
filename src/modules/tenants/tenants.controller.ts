import { diContainer } from './../base/base.container';
import { GET } from '@sc/decorators';
import { BaseController } from '@scModules/base';
import { TenantsService } from './tenants.service';

// const service = new TenantsService();

export class TenantsController extends BaseController {

  @GET( '/a/first' )
  first() {
    console.log( 'Controller method first' );
    // service.test();
    return { msg: 1 };
  }

  @GET( '/b/second' )
  async second() {
    console.log( '[TenantsController] second' );
    const
      service: TenantsService = await diContainer().get( 'tenants.providers.TenantsService' );

    console.log( '[TenantsController] service', service );

    // eslint-disable-next-line one-var
    const t = await service.test();

    console.log( '[TenantsController] t', t );

    return t;
    // console.log( 'users:', users );
    // return { users };
  }
}
