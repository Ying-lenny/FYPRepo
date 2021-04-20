import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Modal from "../components/Modal/Modal";
 
function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

    return (
      <div>
        <h1 className="pageHeader">Home</h1>
        <ImageGrid setSelectedImg={setSelectedImg}/>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      </div>
    );
  }
 
export default Home;