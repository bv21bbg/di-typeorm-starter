import { getDataSource } from '@sc/data/data-source';
import { isNil } from 'lodash';
import { Repository } from 'typeorm';

export class BaseService {
  protected repo: Repository<any>;
  protected ds: any;

  consructor() {
    this.initData();
  }

  async getRepo() {
    if ( isNil( this.repo )) {
      await this.initRepo();
    }

    return this.repo;
  }

  async initData() {
    this.ds = await getDataSource();
  }

  async initRepo() {
    if ( !isNil( this.repo )) {
      return;
    }

    if ( isNil( this.ds )) {
      await this.initData();
    }
  }

}

