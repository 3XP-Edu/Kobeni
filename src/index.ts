import { Server } from "./server";



const server = new Server();

function app(){
    server.getServer();
    server.bindServer();
}
app();