const routes = [];

export function GET( route: string ) {
  console.log( '[GET] init' );
  return function get( target: any, propertyKey: string, descriptor: PropertyDescriptor ): void {
    console.log( '[GET] new route ', route, target, propertyKey, descriptor );
    routes.push({ route, callback: target[ propertyKey ] });
    // routes.push({ route, callback: descriptor.value });
  };
}

export function registerRoutes( app ) {
  console.log( '[register routes] count: ', routes.length )
  for ( let route of routes ) {
    app.get( route.route, async( req, res ) => {
      const result = await route.callback( req, res );
      console.log( '[GET registerRoutes] result', result );
      res.send( result );
    });
  }
}
