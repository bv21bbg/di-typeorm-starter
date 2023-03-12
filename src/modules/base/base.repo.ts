import { getDataSource } from '@sc/data/data-source';
import { DataSource } from 'typeorm';

export class BaseRepo {
  protected ds: DataSource;

  constructor() {
    this.prepareDataSource();
  }

  protected async prepareDataSource() {
    this.ds = await getDataSource();
  }
}
