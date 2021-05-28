import './App.css';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log("submitting!");
    console.log(data);
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      
      <AppStyled>
        <h1>Welcome to AnyTutor</h1>

        <form onSubmit={handleSubmit(submit)} className="uploads">

          <input 
            name="audio"
            accept="audio/*"
            id="contained-button-file"
            type="file"
            required
            {...register("audio-upload")} />

          <input 
            name="video"
            accept="video/*"
            id="contained-button-file"
            type="file"
            required
            {...register("video-upload")} />

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
    flex-direction: column;
  }

  .audio {
    margin-bottom: 0.5rem;
  }

  .submit {
    margin-top: 1.5rem;
  }
`;

export default App;
