import 'reflect-metadata';
import { isNil } from 'lodash';
import { DataSource } from 'typeorm';
import { diContainer } from '@scModules/base';
import { dirname } from 'path';

let dataSource: DataSource | null = null;

export const
  initDataSource = async() => {
    try {
      console.log( '[data-source] initializing data source ...' );
      dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'scdb',
        password: 'response',
        database: 'scdb',
        synchronize: true,
        logging: 'all',
        entities: [
          dirname( __dirname ) + '/modules/*/entities/*.entity.ts'
        ],
        migrations: [],
        subscribers: [],
        cache: true
      });

      await dataSource.initialize();

      const d = diContainer().register( 'TypeORM.DataSource', dataSource );
      d.synthetic = true;
      diContainer().set( 'TypeORM.DataSource', dataSource );

    } catch ( e ) {
      console.error( e );
    }
  },

  getDataSource = async() => {
    console.log( '[data-source] requesting data source ...' );
    if ( isNil( dataSource )) {
      await initDataSource();
    }

    return dataSource;
  }
