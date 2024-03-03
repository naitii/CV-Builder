import { useState } from "react";
import "./App.css";
import { MainBody } from "./mainBody.jsx";
import CvPreview from "./livePreview.jsx";
import data from "./data.js";
import DownloadIcon from "./assets/download.svg";
import { updatedData } from "./mainBody.jsx";

const Header = () => {
  return (
    <header>
      <h1>CV Builder</h1>
    </header>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "home" && (
        <>
          <Header />
          <MainBody />
          <div className="save" onClick={() => navigate("preview")}>
            <img src={DownloadIcon} alt="Save" />
            <h4>Print</h4>
          </div>
        </>
      )}
      {currentPage === "preview" && (
        <>
          <CvPreview data={updatedData} />
        </>
      )}
    </>
  );
}

export default App;
