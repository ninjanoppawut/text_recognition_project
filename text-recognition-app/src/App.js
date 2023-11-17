// นำเข้าไฟล์ CSS ของแอพ
import "./App.css";
// นำเข้า Hook useState จาก React
import { useState } from "react";
// นำเข้าคอมโพเนนต์ TessaractWorker ที่เราสร้าง
import TessaractWorker from "./components/TessaractWorker";
// THA: 'tha',

// ประกาศคอมโพเนนต์หลักของแอป
function App() {
  // ใช้ Hook useState เพื่อเก็บข้อมูลไฟล์ที่ถูกเลือกและภาษาที่ถูกเลือก
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLang, setSelectedLang] = useState("eng");

  // ฟังก์ชัน handleLangSelected ใช้ในการเลือกภาษา
  const handleLangSelected = (lang) => {
    //เก็บค่าที่รับมาในตัวแปร selectedLang
    setSelectedLang(lang.target.value);
    //แสดงผลในconsole
    console.log(lang.target.value);
  };
  // ฟังก์ชัน handleFileUpload ใช้ในการเลือกไฟล์
  const handleFileUpload = (event) => {
    const image = event.target.files[0];
    console.log(image);
    //เก็บค่าที่รับมาในตัวแปร selectedFile
    setSelectedFile(URL.createObjectURL(image));
  };

  // ส่วนแสดงผล UI ของแอป
  return (
    <div className="App">
      <h1>This is text recognition app</h1>
      {/* ส่วนควบคุมการเลือกภาษาและเลือกไฟล์ */}
      <div className="control-container">
        {/* เลือกภาษา */}
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
        {/* เลือกไฟล์ */}
        <input
          type="file"
          accept="image/*"
          className="inputfile"
          onChange={handleFileUpload}
        />
      </div>
      {/* ส่วนที่ใช้เรียกใช้คอมโพเนนต์ TessaractWorker ที่เราสร้าง */}

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
