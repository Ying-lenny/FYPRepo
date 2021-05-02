import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Modal from "../components/Modal/Modal";
import UploadForm from "../components/ImgUploadForm/uploadForm";
import { Grow } from '@material-ui/core';
 
function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

    return (
      <Grow in>
          <div>
            <h1 className="pageHeader">Image Gallery</h1>
            <UploadForm />
            <br/>
            <h1 className="pageHeader">Clients: Click an image below to see the full image and user details</h1>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
          </div>
      </Grow>
    );
  }
 
export default Gallery;