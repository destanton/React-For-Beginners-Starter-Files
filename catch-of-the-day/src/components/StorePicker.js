import React from "react";

class StorePicker extends React.Component{
  render() {
    return (
      <div className="store-selector">
      <form className="StorePicker">
        <h2>Please Enter a Store!</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store ⇾ </button>
      </form>
      </div>
    );
  }
}

export default StorePicker;

