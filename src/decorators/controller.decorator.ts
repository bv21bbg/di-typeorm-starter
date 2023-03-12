// WIP
export function scController( controllerBaseRoute ) {
  console.log( 'scController 1', controllerBaseRoute );
  return function aaa<T extends { new( ...args: any[]): {} }>( constructor: T ) {
    console.log( 'scController 2 ', constructor );
    return class extends constructor {
      basePath = controllerBaseRoute;
    };
  }
}
