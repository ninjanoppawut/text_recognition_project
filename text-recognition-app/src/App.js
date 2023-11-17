import "./App.css";
import { useState } from "react";
import TessaractWorker from "./components/TessaractWorker";
// THA: 'tha',
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLang, setSelectedLang] = useState("eng");

  const handleLangSelected = (lang) => {
    setSelectedLang(lang.target.value);
    console.log(lang.target.value);
  };
  const handleFileUpload = (event) => {
    const image = event.target.files[0];
    console.log(image);
    setSelectedFile(URL.createObjectURL(image));
  };
  // const handleSubmit = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="App">
      <h1>This is text recognition app</h1>
      <div className="control-container">
        <select
          className="langauge-selecter"
          defaultValue="eng"
          onChange={handleLangSelected}
        >
          <option value="eng" selected>
            English
          </option>
          <option value="tha" selected>
            Thai
          </option>
        </select>
        <input
          type="file"
          accept="image/*"
          className="inputfile"
          onChange={handleFileUpload}
        />
      </div>
      {/* <button className="recog-btn" onClick={handleSubmit}>
        Recognize
      </button> */}
      {/* <div className="display-area">{selectedFile}</div> */}
      <div className="tessarat-container">
        <TessaractWorker
          selectedFile={selectedFile}
          selectedLang={selectedLang}
        />
      </div>
    </div>
  );
}

export default App;
