export enum EBaseMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete'
}

export interface IRoute {
  route: string;
  method: EBaseMethods;
  service: any;
  handler: string;
}

export interface IBaseModule {
  registerRoutes: ( app: any ) => void;
  getEntities: () => any[];
}
