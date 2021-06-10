import { useForm } from "react-hook-form";
import styled from "styled-components";
import BackgroundStyle from "../styles/BackgroundStyle";
import AudioVideoUploader from "../components/AudioVideoUploader";
import Button from "../components/Button";

const Uploader = ({ text }) => {
  const { handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
    fetch(
      "https://8c3vifq9mj.execute-api.ap-southeast-1.amazonaws.com/default/test-socket",
      {
        method: "POST",
        mode: "no-cors", // TODO: Check what the proper method is; need to handle error
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <h1>Welcome to AnyTutor!</h1>
      <h2>{text}</h2>

      <div className="audio">
        <AudioVideoUploader isAudio={true} />
      </div>
      <AudioVideoUploader isAudio={false} />
      <ul className="video-requirements">
        <li>Video must have a face in every frame!</li>
        <li>We recommend a short video ~10-20s long :)</li>
      </ul>

      <form onSubmit={handleSubmit(submit)} className="uploads">
        <Button text="Submit" className="btn-submit"></Button>
      </form>
    </AppStyled>
  );
};

const AppStyled = styled.main`
  .uploads {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .audio {
    margin-bottom: 1rem;
  }

  .video-requirements {
    list-style: none;
    padding: 0;
  }
`;

export default Uploader;
