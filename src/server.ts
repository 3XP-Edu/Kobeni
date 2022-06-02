import * as grpc from "@grpc/grpc-js";
import { PBConfig } from "./config/proto-configs";
import implementation from "./implementation";
import { UserServiceHandlers } from "./proto/userPackage/UserService";

export class Server {
  private proto_configs: PBConfig;
  private userPackage: any;
  constructor() {
    this.proto_configs = new PBConfig();
    this.userPackage = this.proto_configs.configPackage();
  }

  public bindServer() {
    const server = this.getServer();
    server.bindAsync(
      `0.0.0.0:${this.proto_configs.PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) return console.log(err);
        else
          console.log(
            `>>>>> 👻 Kobeni Microservice running on port ${port} 👻 <<<<<`
          );
        server.start();
      }
    );
  }

  public getServer() {
    const server = new grpc.Server();
    server.addService(this.userPackage.UserService.service, implementation as UserServiceHandlers);
    return server;
  }
}
