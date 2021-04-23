import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Modal from "../components/Modal/Modal";
 
function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

    return (
      <div>
        <h1 className="pageHeader">Image Gallery</h1>
        <ImageGrid setSelectedImg={setSelectedImg}/>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      </div>
    );
  }
 
export default Gallery;