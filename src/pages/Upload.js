import { useForm } from "react-hook-form";
import styled from "styled-components";
import BackgroundStyle from "../styles/BackgroundStyle";
import Uploader from "../components/Uploader";
import Button from "../components/Button";

const Upload = ({ text, mediaType }) => {
  const { handleSubmit } = useForm();

  const submit = (data) => {
    if (mediaType === "image/*") {
      alert("Oops! This feature isn't ready yet :)");
      return;
    }

    // * Endpoint to lambda that will run our notebook
    const url =
      mediaType === "video/mp4"
        ? "https://8c3vifq9mj.execute-api.ap-southeast-1.amazonaws.com/default/test-socket"
        : ""; // TODO Update submission URL for image

    console.log(url);
    fetch(url, {
      method: "POST",
      mode: "no-cors", // TODO: Check what the proper method is; need to handle error
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        console.log("CAUGHT ERROR");
        console.log(error);
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <h1>Welcome to AnyTutor!</h1>
      <h2 className="sub-heading">{text}</h2>

      <div className="audio">
        <Uploader mediaType="audio/*" />
      </div>

      <Uploader mediaType={mediaType} />

      {mediaType === "video/*" ? (
        <ul className="video-requirements">
          <li>Video must have a face in every frame!</li>
          <li>We recommend a short video ~10-20s long :)</li>
        </ul>
      ) : (
        <></>
      )}

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
    margin-top: 1rem;
  }

  .sub-heading {
    margin: 1rem;
  }
`;

export default Upload;
