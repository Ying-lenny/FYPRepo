import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Modal from "../components/Modal/Modal";
 
function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

    return (
      <div>
        <h2>Hello and welcome to my homepage</h2>
        <ImageGrid setSelectedImg={setSelectedImg}/>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      </div>
    );
  }
 
export default Home;