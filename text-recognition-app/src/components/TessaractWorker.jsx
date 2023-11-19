// นำเข้าไฟล์ CSS ของแอพ
import "../App.css";
// นำเข้าคอมโพเนนต์ React ที่จำเป็น
import React, { useEffect, useState } from "react";
// นำเข้าไลบรารี Tesseract.js
import Tesseract from "tesseract.js";

// ประกาศคอมโพเนนต์ TessaractWorker ด้วยฟังก์ชันสำหรับทำ OCR
function TessaractWorker(props) {
  // สร้าง state เพื่อเก็บข้อความหลังจากทำ OCR
  const [textAfterRecognize, setTextAfterRecognize] = useState(null);
  // ฟังก์ชัน recognizeText ทำ OCR โดยใช้ Tesseract.js
  const recognizeText = async () => {
    try {
      props.handleProgress(true);
      // ตรวจสอบว่ามีไฟล์รูปที่ถูกเลือกหรือไม่
      if (props.selectedFile) {
        // เรียกใช้ Tesseract.js เพื่อทำ OCR
        const result = await Tesseract.recognize(
          props.selectedFile,
          props.selectedLang,
          { logger: (info) => console.log(info) }
        );
        // แสดงผลลัพธ์ที่ได้ใน Console
        console.log("result", result.data.text);
        // เก็บข้อความที่ได้ลงใน state เพื่อนำไปแสดงผลใน UI
        setTextAfterRecognize(result.data.text);
        props.handleProgress(false);
      } else {
        // ถ้าไม่มีไฟล์รูปที่ถูกเลือก แสดงข้อความแจ้งเตือนใน Console
        console.log("Please select an image file first");
        props.handleProgress(false);
      }
    } catch (error) {
      // กรณีเกิดข้อผิดพลาดในขณะทำ OCR แสดงข้อความผิดพลาดใน Console
      console.error("Error during text recognition:", error);
      // จัดการข้อผิดพลาดตามที่ต้องการ (เช่น แสดงข้อความผิดพลาดให้ผู้ใช้)
      props.handleProgress(false);
    }
  };
  // useEffect ที่ถูกใช้เพื่อให้ recognizeText ทำงานเมื่อ props.selectedFile เปลี่ยน
  useEffect(() => {
    // แสดงค่าของ props.selectedFile ใน Console
    console.log("props.selectedFile", props.selectedFile);
    // เรียกใช้ฟังก์ชัน recognizeText เมื่อ props.selectedFile เปลี่ยน
    recognizeText();
  }, [props.selectedFile]);
  // ส่วนการแสดงผล UI ของคอมโพเนนต์
  return (
    <div className="tessaract-result">
      <p>{textAfterRecognize}</p>
    </div>
  );
}
// ส่งออกคอมโพเนนต์ TessaractWorker เพื่อนำไปใช้ในอื่น ๆ ของแอพ
export default TessaractWorker;
