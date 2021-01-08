import React from "react";

function Message(props) {
  return (
    <div
      style={{
        paddingLeft: "2px",
        paddingRight: "2px",
        marginBottom: "10px",
      }}
    >
      <div
        className="row"
        style={{
          minWidth: "10px",
          borderRadius: "4px",
          paddingRight: "4px",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "4px",
          float: props.thisUser ? "right" : "left",
          background: "#006e99",
          color: "white",
        }}
      >
        {props.message}
    <span style={{position:"relative",fontSize:"10px",top:"15px"}}>{props.user}</span>
      </div>
      <br />
    </div>
  );
}

export default Message;
