import Websocket, { WebSocketServer } from "ws";

const wss=new WebSocketServer({ port:8080 });


//event handler
wss.on('connection', function(socket){

     wss.on('error', console.error);
    console.log('user connected')

    // setInterval(() => {
    //     socket.send('hello from websocket')
    // }, 500);

    //$$ socket level pe not like on wss on socket level.

    //-------------------------********  ping-pong application..  *********-----------------------------------
    socket.on('message', (e)=>{
        console.log(e.toString())
        
        e.toString()==='ping'? socket.send('pong'): socket.send('hutiya ping send kar!')
    })


})
