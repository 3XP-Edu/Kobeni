// Original file: src/proto/user.proto

import type { User as _userPackage_User, User__Output as _userPackage_User__Output } from '../userPackage/User';

export interface UpdateUserRequest {
  'id'?: (string);
  'user'?: (_userPackage_User | null);
}

export interface UpdateUserRequest__Output {
  'id'?: (string);
  'user'?: (_userPackage_User__Output);
}
