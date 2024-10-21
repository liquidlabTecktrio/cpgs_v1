

export const LOGIN_API = (username , password)=>{
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
      const success = true; // Change this to false to see the reject case
  
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Operation failed!");
      }
    }, 2000); // Wait for 2 seconds
  });
}

export const GET_AUTO_CALIBRATE_FRAME_REQUEST = ()=>{
    // console.log("intializing socket connections")
    ESTABLISH_WEBSOCKET_CONNECTION('auto_coordinate_finder').then((socket)=>{
      socket.send("get_frame")
      socket.onmessage = function (data) {
        // const data = JSON.parse(event.data);
          console.log('Message from server:', "done");
    };
    }).catch((error)=>{

    })
   
}
  

function ESTABLISH_WEBSOCKET_CONNECTION(endpoint) {
    let SERVER_WEBSOCKET_URL = `ws://127.0.0.1:8001/${endpoint}`
    //     Here are the possible values for readyState:

    // 0: CONNECTING – The connection is not yet open.
    // 1: OPEN – The connection is open and ready to communicate.
    // 2: CLOSING – The connection is in the process of closing.
    // 3: CLOSED – The connection is closed or could not be opened.
    return new Promise((resolve, reject) => {
        // get the websocket mirrorlink key from the brower cookie
        // const key = document.cookie
        const key = 'admin'
        if (key) {


            let socket = new WebSocket(SERVER_WEBSOCKET_URL);

            // Listen for the connection to be established
            socket.onopen = function () {
                console.log('Liquidpark CPGS Server Socket connected');
                resolve(socket)
            };

            // Listen for messages from the server
            socket.onmessage = function (data) {
                // const data = JSON.parse(event.data);
                  console.log('Message from server:', data);
            };

            socket.onclose = (e) => {
                console.log('Liquidpark CPGS Server Socket DisConnected!', e)
                reject(false)
            }

        }
    })


}