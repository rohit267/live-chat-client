import Header from "../components/Header";
import LoginSection from "../components/LoginSection";
// import { useEffect } from "react";



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
