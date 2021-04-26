import React, { Component } from "react";
import UploadForm from "../components/ImgUploadForm/uploadForm";
import { Container, Grow } from '@material-ui/core';
 
class Profile extends Component {
  render() {
    return (
      <Grow in>
        <Container>
          <div>
            <UploadForm />
          </div>
          </Container>
      </Grow>
    );
  }
}
 
export default Profile;