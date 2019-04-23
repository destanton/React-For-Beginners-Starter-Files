import React from "react";
import { render } from "react-dom";
import FileDownload from "./components/FileDownload";
import Router from "./components/Router";
import "./css/style.css";

// render(<StorePicker />, document.querySelector("#main"));
render(<Router />, document.querySelector("#main"));
