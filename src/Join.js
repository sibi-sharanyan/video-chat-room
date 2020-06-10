import React, { useState, useCallback } from "react";
import Room from "./Room";

export default function Join(props) {
  const [name, setName] = useState("");

  const [token, setToken] = useState(null);
  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  const joinRoom = async (e) => {
    const data = await fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: name,
        room: props.match.params.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setToken(data.token);
  };

  if (token) {
    return (
      <Room
        roomName={props.match.params.id}
        token={token}
        handleLogout={handleLogout}
      />
    );
  } else {
    return (
      <div
        style={{ height: "40vh" }}
        className="d-flex flex-column justify-content-around align-items-center"
      >
        <div class="input-group mb-3  w-50">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default1">
              Room
            </span>
          </div>
          <input
            value={props.match.params.id}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default1"
            disabled
          />
        </div>

        <div class="input-group mb-3  w-50">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default2">
              Name
            </span>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default2"
          />
        </div>
        <button className="btn btn-info" onClick={(e) => joinRoom(e)}>
          Join Room
        </button>
      </div>
    );
  }
}
