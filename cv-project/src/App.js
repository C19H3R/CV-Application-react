import React, { useState } from "react";
import "./App.css";
import EditPage from "./components/EditPage";
import Header from "./components/Header";
import PreviewPage from "./components/PreviewPage";

function App() {
   const [cvData, setCvData] = useState({
      firstName: "",
      lastName: "",
      title: "",
      photo: "ASDF",
      address: "",
      phoneNumber: "",
      Email: "",
      Description: "",
      Experience: [
         {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
         },
      ],
      Education: [
         {
            school: "",
            city: "",
            level: "",
            Core: "",
            from: "",
            to: "",
         },
      ],
   });

   return (
      <div>
         <Header />
         <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
            <EditPage setData={setCvData} data={cvData} />
            <PreviewPage data={cvData} />
         </div>
         {/* <div>
            <PreviewPage />
         </div> */}
         {/* FOOTER */}
      </div>
   );
}

export default App;
