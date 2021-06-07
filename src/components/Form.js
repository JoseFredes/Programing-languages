import React, { useState } from "react";
import All from "./all";

const Form = () => {
  const [alls, setal] = useState({});
  const [all, setAll] = useState([]);

  const handleChange = (e) => setal({ [e.target.name]: e.target.value });

  const handleClick = (e) => {
    if (Object.keys(alls).length === 0 || alls.alls.trim() === "") {
      alert("el campo no puede estar vacio");
      return;
    }
    setAll([...all, alls]);
  };

  const deleteall = (indice) => {
    const newall = [...all];
    newall.splice(indice, 1);
    setAll(newall);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar elemento a la lista</label>
        <br />
        <input type="text" name="alls" onChange={handleChange} />
        <button onClick={handleClick}>agregar</button>
      </form>

      {all.map((value, indice) => (
        <All
          all={value.alls}
          key={indice}
          index={indice}
          deleteall={deleteall}
        />
      ))}
    </>
  );
};

export default Form;
