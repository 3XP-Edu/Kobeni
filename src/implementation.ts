import prismaClient from "./prisma";
import { GetAllUsersResponse } from "./proto/userPackage/GetAllUsersResponse";

//TORNAR CLASSE

export default {
  async registerUser(call: any, callback: any) {
    const { email, username, password, taxId } = call.request.user;
    const user = await prismaClient.user.create({
      data: {
        email,
        username,
        password,
        taxId,
      },
    });
    return callback(null, { user })
  },
  async getUserById(call: any, callback: any) {
    const { id } = call.request;
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    })
    return callback(null, { user })
  },
  async getAllUsers(call: any, callback: any): Promise<GetAllUsersResponse> {
    const users = await prismaClient.user.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return callback(null, { users })
  },
  async deleteUser(call: any, callback: any){
    const { id } = call.request;
    const deleted = await prismaClient.user.delete({
      where: {
        id: id
      },
    });
    return callback(null, { deleted })
  },
  async updateUserById(call: any, callback: any) {
    const { id } = call.request;
    const user = await prismaClient.user.update({
      data: call.request.user,
      where: {
        id
      },
    });
    return callback(null, { user }) 
  },
};
