import { useState } from "react";

export default function Form() {
  const [name, setname] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setname({ ...name, firstname: e.target.value })}
      />

      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setname({ ...name, lastname: e.target.value })}
      />

      <h3>
        your name is : {name.firstname} {name.lastname}
      </h3>
    </div>
  );
}
