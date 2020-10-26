import { useState } from "react";

function LoginSection(props) {
  const [uname, setUName] = useState(null);
  const [rName, setRname] = useState(null);

  function chatInit(e) {
      console.log('stated')
    e.preventDefault();
    let postData = { uname, rName };
    // wind;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 bg-gradient-secondary border p-4 rounded mt-3 text-center">
          <div className="row">
            <h1 className="text-info m-auto">Welcome to LiveChat</h1>
          </div>
          <form method="post" onSubmit={(e) => chatInit(e)}>
            <div className="mt-4">
              <input
                maxLength="10"
                type="text"
                className="form-control w-50 m-auto"
                name="username"
                value={null === uname ? "" : uname}
                placeholder="username"
                onChange={(e) => setUName(e.target.value)}
              />
              <br />
              <select
                className="form-control w-50 m-auto"
                name="chatType"
                defaultValue="0"
                onSelect={(e) => setRname(e.target.value)}
              >
                <option value="0">Select Chatroom</option>
                <option value="1">Javascript</option>
                <option value="2">PHP</option>
              </select>
              <br />
              <button type="submit" name="submit" className="btn btn btn-info">
                Join
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default LoginSection;
