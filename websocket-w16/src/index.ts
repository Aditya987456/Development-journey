import { Socket } from "dgram";
import Websocket, { WebSocketServer } from "ws";

const wss=new WebSocketServer({ port:8080 });


// //***  w-16.2  class. */
// //-- event handler
// wss.on('connection', function(socket){

//      wss.on('error', console.error);
//     console.log('user connected')

//     // setInterval(() => {
//     //     socket.send('hello from websocket')
//     // }, 500);

//     //$$ socket level pe not like on wss on socket level.

//     //-------------------------********  ping-pong application..  *********-----------------------------------
   
//     socket.on('message', (e)=>{
//         console.log(e.toString())
        
//         e.toString()==='ping'? socket.send('pong'): socket.send('hutiya ping send kar!')
//     })

// })











//let userCount=0;
//let allSockets:Websocket[]=[]    //all connection that is all users...  and of websocket type array....

//*****************-----------------   w-16.2   ------------------*************** */

// wss.on('connection', (socket)=>{
//     allSockets.push(socket)
//     //socket lets you to talk with the person that connected now. 

   
//      // userCount=userCount+1;
//     //console.log('user connected #'+userCount)


//     socket.on('message', (message)=>{
//         console.log('message received '+ message.toString());

    
//         allSockets.map( (s)=>{
//             s.send(message.toString()+ ' : sent from the server.')

//         })

//         // setTimeout(() => {
//         //      socket.send(message.toString()+ ' : sent from the server.')
//         // }, 1000);
       
//     })


//     // ------  disconnect logic  ----------
//     socket.on('disconnect', ()=>{
//         allSockets.filter( (user)=> user!=socket)
//     })










// })








//--------------------------**********  chat-app  code   ************-------------------------



interface Users {
    socket:Websocket;
    room:string;
}

let allSockets: Users[]=[]

wss.on('connection', (socket)=>{

    socket.on('message', (msg)=>{
        //@ts-ignore
        const parsedMsg=JSON.parse(msg);

        if(parsedMsg.type==='join'){
            allSockets.push(
                {
                    socket,
                    room:parsedMsg.payload.roomId
                }
            )
        }

// console.log(allSockets);    //---> yaha tak to thik hai


        //if want to chat then firstly checking the room of this user from global array.
        if(parsedMsg.type ==='chat'){
            //@ts-ignore
            let currentUserRoom = allSockets.find((x)=>x.socket == socket).room
            console.log('------------*****----------'+ currentUserRoom);

            // //send message to all the user of that currentuserroom.
            // //@ts-ignore
            // allSockets.filter( (userSockets)=>userSockets.room==currentUserRoom).socket.send(parsedMsg.payload.message)


            for(let i=0; i<allSockets.length; i++){
                if(allSockets[i].room==currentUserRoom){
                    allSockets[i].socket.send(parsedMsg.payload.message)
                }
            }


        }








    })

    



})


