import { config } from 'dotenv';
import { getDataSource, initDataSource } from '@sc/data/data-source';
import { User } from '@scModules/tenants/entities/User.entity';
import { MainModule } from '@scModules/main';

export const setupServer = async() => {
  try {

    config();

    await initDataSource();

    const express = require( 'express' ),
      app = express(),
      port = process.env.PORT;

    app.get( '/', ( req, res ) => {
      res.send( 'Express + TypeScript Server' );
    });

    app.get( '/test', async( req, res ) => {
      const
        ds = await getDataSource(),
        users = await ds.manager.find( User );

      res.send({ users });
    });

    // eslint-disable-next-line one-var
    const mainModule = new MainModule( app );

    mainModule.prepareRoutes();


    app.listen( port, () => {
      console.log( `[server]: Server is running at http://localhost:${port}` );
    });
  } catch ( e ) {
    console.error( '[server] Failed to setup server: ', e );
  };

};
