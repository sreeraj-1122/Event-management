import React from "react";

function AddEvent() {
  return (
    <div className="add-section">
      <form action="">
        <div className="inputs">
          <label htmlFor="">Event Name</label>
          <input type="text" />
        </div>
        <div className="inputs">
          <label htmlFor="">Place</label>
          <input type="text" />
        </div>
        <div className="inputs">
          <label htmlFor="">Date</label>
          <input type="text" />
        </div>
        <div className="inputs">
          <label htmlFor="">Description</label>
         <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddEvent;
