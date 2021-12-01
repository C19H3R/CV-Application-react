import React from "react";
import "./App.css";
import EditPage from "./components/EditPage";
import Header from "./components/Header";
import PreviewPage from "./components/PreviewPage";

function App() {
   return (
      <div>
         <Header />
         <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
            <EditPage />
            <PreviewPage />
         </div>
         {/* FOOTER */}
      </div>
   );
}

export default App;
