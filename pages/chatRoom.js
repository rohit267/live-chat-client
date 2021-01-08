import { useEffect, useState, useRef } from "react";
import Cookie from "js-cookie";
import io from "socket.io-client";
import Header from "../components/Header";
import { Router } from "next/router";
import Message from "../components/Message";

const chatRoom = () => {
  const [users, setUsers] = useState([]);
  const [thisChats, setChats] = useState([
    // { user: "user1", message: "Hii" },
    // { user: "rohit267", message: "hii2" },
  ]);
  const [room, setRoom] = useState("");
  const [thisUser, setThisUser] = useState(null);
  const [socketio, setSocketIo] = useState(null);
  const typerRef = useRef();

  const ENDPOINT = "http://127.0.0.1:5000";

  useEffect(() => {
    let postData = window.atob(Cookie.get("_chatData")).split(":");

    if (postData[0] == null || postData[0] == undefined) {
      Router.push("/");
    } else {

      setThisUser(postData[0]);
      let mUsers = users;
      setRoom(postData[1]);

      const socket = io(ENDPOINT,{query:"user="+postData[0]+"&room="+postData[1]});
      setSocketIo(socket);

      socket.on("roomMessage", (message) => {
        console.log(message);
        if (message.room == postData[1]) {
          let mChat=thisChats;
          mChat.push(message);
          // console.log(mChat);
          setChats(mChat);
        }
        
      });

      socket.on("message",(mes)=>{
        console.log(mes)
        try{
          setUsers(mes.currentUsers.php);
        }
        catch(e){
          console.log(e);
        }
       
      })
    }
  }, []);

  function hanldeSend() {
    let mUserMessage = typerRef.current.value;
    if (mUserMessage.length > 0) {
      let mSocketObject = { user: thisUser, message: mUserMessage, room: room };
      //   setChats([...thisChats, mSocketObject]);
      typerRef.current.value = "";
      console.log(mSocketObject);
      socketio.emit("roomMessage", mSocketObject);
    }
  }

  return (
    <div>
      <Header />
      <div className="contaainer-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-info m-auto">LiveChat</h1>
                <p>{room.toLocaleUpperCase()}</p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-2"
                style={{
                  border: "solid 1px grey",
                  borderRadius: "4px",
                  padding: "0",
                }}
              >
                <div className="text-center" style={{ background: "#4287f5" }}>
                  Online
                </div>
                {users.map((u, i) => (
                  <div key={i}>{u}</div>
                ))}
              </div>
              <div className="col-md-8 border border-info rounded">
                <div className="chats" style={{ height: "400px" }}>
                  {thisChats.map((chat, i) => (
                    <Message
                      key={i}
                      message={chat.message}
                      user={chat.user}
                      thisUser={chat.user == thisUser}
                    />
                  ))}
                </div>
                <div className="row chatForm">
                  <div className="col-md-12 text-center ">
                    <input
                      ref={typerRef}
                      type="text"
                      name="chatText"
                      className="form-control w-75 d-inline"
                      placeholder="Type your message"
                    />
                    <button onClick={hanldeSend} className="btn btn-info">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default chatRoom;
