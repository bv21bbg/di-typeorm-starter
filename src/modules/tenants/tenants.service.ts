import { BaseService } from '@scModules/base/base.service';
import { getDataSource } from '@sc/data/data-source';
import { User } from '@sc/modules/tenants/entities/User.entity';
import { diContainer } from '../base';
import { isNil } from 'lodash';

export class TenantsService extends BaseService {

  constructor() {
    super();
    this.initRepo();
  }

  async initRepo(): Promise<void> {
    if ( !isNil( this.repo )) {
      return;
    }

    if ( isNil( this.ds )) {
      await this.initData();
    }

    this.repo = await this.ds.getRepository( User );
  }

  async test() {
    await this.initRepo();

    return this.repo.findOneBy({
      id: 1
    })

    // return this.ds.getRepository( User ).findOneBy({
    //   id: 1
    // })

    // Another option to fetch data - using  EntityManager
    // return this.ds.manager.find( User, {
    //   where: {
    //     id: 1
    //   }
    // });
  }
}
