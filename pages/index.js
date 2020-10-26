import io from "socket.io-client";

import Header from "../components/Header";
import LoginSection from "../components/LoginSection";
// import { useEffect } from "react";

// const ENDPOINT = "http://127.0.0.1:5000";

function Home() {
  // useEffect(() => {
  //   const socket = io(ENDPOINT);
  //   socket.on("message", (meessage) => {
  //     console.log(meessage);
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <LoginSection />
    </div>
  );
}

export default Home;
