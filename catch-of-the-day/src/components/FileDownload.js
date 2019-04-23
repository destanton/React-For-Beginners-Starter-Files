import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class FileDownload extends React.Component {
  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("myInput").value], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.cfg";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  render() {
    return (
      <div>
        <input id="myInput" />
        <button onClick={this.downloadTxtFile}>Download cfg</button>
        <form action="" className="store-selector" />
      </div>
    );
  }
}

export default FileDownload;
