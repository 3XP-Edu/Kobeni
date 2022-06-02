// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteUserRequest as _userPackage_DeleteUserRequest, DeleteUserRequest__Output as _userPackage_DeleteUserRequest__Output } from '../userPackage/DeleteUserRequest';
import type { DeleteUserResponse as _userPackage_DeleteUserResponse, DeleteUserResponse__Output as _userPackage_DeleteUserResponse__Output } from '../userPackage/DeleteUserResponse';
import type { Empty as _userPackage_Empty, Empty__Output as _userPackage_Empty__Output } from '../userPackage/Empty';
import type { GetAllUsersResponse as _userPackage_GetAllUsersResponse, GetAllUsersResponse__Output as _userPackage_GetAllUsersResponse__Output } from '../userPackage/GetAllUsersResponse';
import type { GetUserByIdRequest as _userPackage_GetUserByIdRequest, GetUserByIdRequest__Output as _userPackage_GetUserByIdRequest__Output } from '../userPackage/GetUserByIdRequest';
import type { RegisterUserRequest as _userPackage_RegisterUserRequest, RegisterUserRequest__Output as _userPackage_RegisterUserRequest__Output } from '../userPackage/RegisterUserRequest';
import type { UpdateUserRequest as _userPackage_UpdateUserRequest, UpdateUserRequest__Output as _userPackage_UpdateUserRequest__Output } from '../userPackage/UpdateUserRequest';
import type { UserResponse as _userPackage_UserResponse, UserResponse__Output as _userPackage_UserResponse__Output } from '../userPackage/UserResponse';

export interface UserServiceClient extends grpc.Client {
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, callback: grpc.requestCallback<_userPackage_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  
  getUserById(argument: _userPackage_GetUserByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _userPackage_GetUserByIdRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
  registerUser(argument: _userPackage_RegisterUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _userPackage_RegisterUserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
  updateUserById(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUserById(argument: _userPackage_UpdateUserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  deleteUser: grpc.handleUnaryCall<_userPackage_DeleteUserRequest__Output, _userPackage_DeleteUserResponse>;
  
  getAllUsers: grpc.handleUnaryCall<_userPackage_Empty__Output, _userPackage_GetAllUsersResponse>;
  
  getUserById: grpc.handleUnaryCall<_userPackage_GetUserByIdRequest__Output, _userPackage_UserResponse>;
  
  registerUser: grpc.handleUnaryCall<_userPackage_RegisterUserRequest__Output, _userPackage_UserResponse>;
  
  updateUserById: grpc.handleUnaryCall<_userPackage_UpdateUserRequest__Output, _userPackage_UserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  deleteUser: MethodDefinition<_userPackage_DeleteUserRequest, _userPackage_DeleteUserResponse, _userPackage_DeleteUserRequest__Output, _userPackage_DeleteUserResponse__Output>
  getAllUsers: MethodDefinition<_userPackage_Empty, _userPackage_GetAllUsersResponse, _userPackage_Empty__Output, _userPackage_GetAllUsersResponse__Output>
  getUserById: MethodDefinition<_userPackage_GetUserByIdRequest, _userPackage_UserResponse, _userPackage_GetUserByIdRequest__Output, _userPackage_UserResponse__Output>
  registerUser: MethodDefinition<_userPackage_RegisterUserRequest, _userPackage_UserResponse, _userPackage_RegisterUserRequest__Output, _userPackage_UserResponse__Output>
  updateUserById: MethodDefinition<_userPackage_UpdateUserRequest, _userPackage_UserResponse, _userPackage_UpdateUserRequest__Output, _userPackage_UserResponse__Output>
}
