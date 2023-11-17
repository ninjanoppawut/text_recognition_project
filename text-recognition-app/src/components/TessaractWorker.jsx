import "../App.css";
import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";
function TessaractWorker(props) {
  const [textAfterRecognize, setTextAfterRecognize] = useState(null);
  const recognizeText = async () => {
    try {
      if (props.selectedFile) {
        // const worker = await Tesseract.createWorker(props.selectedLang)
        const result = await Tesseract.recognize(
          props.selectedFile,
          props.selectedLang
        );
        console.log("result", result.data.text);
        setTextAfterRecognize(result.data.text);
      } else {
        console.log("Please select an image file first");
      }
    } catch (error) {
      console.error("Error during text recognition:", error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };
  useEffect(() => {
    console.log("props.selectedFile", props.selectedFile);
    recognizeText();
  }, [props.selectedFile]);
  return (
    <div className="tessaract-result">
      Tessaract Worker: <p>{textAfterRecognize}</p>
    </div>
  );
}

export default TessaractWorker;
