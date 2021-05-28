import './App.css';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useForm, Controller } from "react-hook-form";


function App() {
  const { handleSubmit, control } = useForm();

  const submit = (data) => {
    console.log("submitting!");
    console.log(data);
  }

  const upload = () => {
    console.log("DONE");
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      
      <AppStyled>
        <h1>Welcome to AnyTutor</h1>

        <form onSubmit={handleSubmit(submit)} className="uploads">
          <Controller
            control={control}
            name="audio-upload"
            render={({ field }) => 
              <>
                <input
                  name="audio"
                  accept="audio/*"
                  id="contained-button-file"
                  type="file"
                  // hidden
                  // required
                  onChange={upload}
                  {...field}
                />
                <label htmlFor="contained-button-file">
                  <Button type="button" variant="contained" color="primary" component="span"  >
                    Upload Audio (.mp3, .wav)
                  </Button>
                </label>
              </>
            }
          />

          <Controller
            control={control}
            name="video-upload"
            render={({ field }) => 
              <div className="video">
                <input
                  name="video"
                  accept="video/*"
                  id="contained-button-file"
                  type="file"
                  // hidden
                  // required
                  onChange={upload}
                  // {...field}
                />
                <label htmlFor="contained-button-file">
                  <Button type="button" variant="contained" color="primary" component="span"  >
                    Upload Video (.mp4)
                  </Button>
                </label>
              </div>
            }
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
