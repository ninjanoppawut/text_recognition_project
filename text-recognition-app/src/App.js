// นำเข้าไฟล์ CSS ของแอพ
import "./App.css";
import Navbar from "./components/Navbar";
// นำเข้า Hook useState จาก React
import { useState } from "react";
// นำเข้าคอมโพเนนต์ TessaractWorker ที่เราสร้าง
import TessaractWorker from "./components/TessaractWorker";
// THA: 'tha',
// CHI_SIM: 'chi_sim',
//   CHI_TRA: 'chi_tra',
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Progress from "./components/Progress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import FileUpload from "./components/FileUpload";
// ประกาศคอมโพเนนต์หลักของแอป
function App() {
  // ใช้ Hook useState เพื่อเก็บข้อมูลไฟล์ที่ถูกเลือกและภาษาที่ถูกเลือก
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLang, setSelectedLang] = useState("eng");
  const [progress, setProgress] = useState(false);

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
    try {
      const objectURL = URL.createObjectURL(image);
      setSelectedFile(objectURL);
    } catch (error) {
      console.error("Failed to create URL from object:", error);
    }
    //เก็บค่าที่รับมาในตัวแปร selectedFile
  };
  const handleProgress = (bool) => {
    setProgress(bool);
  };

  // ส่วนแสดงผล UI ของแอป
  return (
    <div className="main">
      <Navbar />
      {progress ? <Progress /> : null}
      <div className="App">
        {/* ส่วนควบคุมการเลือกภาษาและเลือกไฟล์ */}
        <div className="control-container">
          {/* เลือกภาษา */}
          {/* <div className="text-select">กรุณาเลือกภาษาที่ต้องการ</div> */}
          <FormControl style={{ width: 300 }}>
            <InputLabel id="demo-simple-select-label">
              กรุณาเลือกภาษาที่ต้องการ
            </InputLabel>
            <Select
              labelId="lang-select-label"
              id="simple-select"
              value={selectedLang}
              label="กรุณาเลือกภาษาที่ต้องการ"
              onChange={handleLangSelected}
            >
              <MenuItem value="eng">อังกฤษ</MenuItem>
              <MenuItem value="tha">ไทย</MenuItem>
              <MenuItem value="chi_sim">จีน</MenuItem>
              <MenuItem value="chi_tra"> จีน (ดั่งเดิม)</MenuItem>
            </Select>
          </FormControl>
          {/* <select
            className="langauge-selecter"
            defaultValue="eng"
            onChange={handleLangSelected}
          >
            <option value="eng" selected>
              อังกฤษ
            </option>
            <option value="tha" selected>
              ไทย
            </option>
            <option value="chi_sim" selected>
              จีน
            </option>
            <option value="chi_tra" selected>
              จีน (ดั่งเดิม)
            </option>
          </select> */}
          {/* เลือกไฟล์ */}{" "}
          {/* <FileUpload
              type="file"
              accept="image/*"
              className="inputfile"
              onChange={handleFileUpload}
            /> */}
          {/* <input
            type="file"
            accept="image/*"
            className="inputfile"
            onChange={handleFileUpload}
          /> */}
          <div className="inputfile">
            <label className="">
              <input type="file" accept="image/*" onChange={handleFileUpload} />
            </label>
          </div>
        </div>
        {/* ส่วนที่ใช้เรียกใช้คอมโพเนนต์ TessaractWorker ที่เราสร้าง */}

        <div className="tessarat-container">
          <Card sx={{ maxWidth: 1200, minWidth: 450, minHeight: 400 }}>
            <CardContent>
              <TessaractWorker
                selectedFile={selectedFile}
                selectedLang={selectedLang}
                handleProgress={handleProgress}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
