import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _userPackage_UserServiceClient, UserServiceDefinition as _userPackage_UserServiceDefinition } from './userPackage/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  userPackage: {
    DeleteUserRequest: MessageTypeDefinition
    DeleteUserResponse: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetAllUsersResponse: MessageTypeDefinition
    GetUserByIdRequest: MessageTypeDefinition
    RegisterUserRequest: MessageTypeDefinition
    UpdateUserRequest: MessageTypeDefinition
    User: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _userPackage_UserServiceClient> & { service: _userPackage_UserServiceDefinition }
  }
}

