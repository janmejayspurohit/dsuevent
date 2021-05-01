import React from "react";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    const formdata = document.getElementById("inp").value;
    if (formdata.length < 10) error = true;
    if (error) alert("wrong input");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="inp" type="text"></input>
        <label for="inp">Enter name</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
