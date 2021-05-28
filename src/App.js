import { useState } from "react";
import './App.css';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useForm } from "react-hook-form";
import FileUploader from './components/FileUploader';


function App() {
  const axios = require('axios').default;
  const { register, handleSubmit } = useForm();
  const [selectedAudio, setSelectedAudio] = useState(null);
  const API_ENDPOINT = 'https://nf4yot096j.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedURL';
  const API_VID_ENDPOINT = 'https://5n58vjjzdd.execute-api.ap-southeast-1.amazonaws.com/default/getVidPresignedURL';

  const submit = (data) => {
    console.log(data);
    fetch('https://8c3vifq9mj.execute-api.ap-southeast-1.amazonaws.com/default/test-socket', {
      method: 'POST',
      mode: 'no-cors',  // TODO: Check what the proper method is; need to handle error
      headers: {
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch( (error) => {
        console.log(error);
      });
  }
  
  const uploadAudio = async (file) => {
    setSelectedAudio(file);
    console.log("AUDIO CHANGING");
    const response = await axios({
      method: 'GET',
      url: API_ENDPOINT
    })

    console.log(response.data.uploadURL);
    console.log(file);

    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      headers: {
        "Content-Type": "audio/*"
      },
      body: file,
    })

    console.log('Result: ', result)
  }


  const uploadVideo = async (file) => {
    // * Get pre-signed URL
    const response = await axios({
      method: 'GET',
      url: API_VID_ENDPOINT
    })

    // * Upload file to S3 via pre-signed URL
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      headers: {
        "Content-Type": "video/mp4"
      },
      body: file,
    })

    console.log('Result: ', result)
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      
      <AppStyled>
        <h1>Welcome to AnyTutor</h1>

        <form onSubmit={handleSubmit(submit)} className="uploads">
          <FileUploader
            onFileSelectSuccess={(file) => uploadAudio(file)}
            onFileSelectError={({ error }) => alert(error)}
            accept="audio/*"
          />

          <FileUploader
            onFileSelectSuccess={(file) => uploadVideo(file)}
            onFileSelectError={({ error }) => alert(error)}
            accept="video/mp4"
          />

          <Button
            className="submit"
            variant="contained"
            color="secondary"
            startIcon={<CloudUploadIcon />}
            type="submit"
          >Submit</Button>

        </form>
      </AppStyled>
    </div>
  );
}

const AppStyled = styled.main`
  .uploads {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .audio {
    margin-bottom: 0.5rem;
  }

  .submit {
    margin-top: 1.5rem;
  }
`;

export default App;
