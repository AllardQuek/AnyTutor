import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import BackgroundStyle from "../styles/BackgroundStyle";
import Uploader from "../components/Uploader";
import CustomButton from "../components/CustomButton";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const Upload = ({ text, mediaType, uploadEmail, lessonVid }) => {
  const { handleSubmit } = useForm();
  const [firstUpload, setFirstUpload] = useState(false);
  const [secondUpload, setSecondUpload] = useState(false);

  const submit = (data) => {
    // * Endpoint to lambda that will run our notebook
    const url =
      "https://8c3vifq9mj.execute-api.ap-southeast-1.amazonaws.com/default/test-socket";

    console.log(url);
    console.log(lessonVid);
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        // * No need to overwrite Access-Control-Allow-Origin	here!
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: uploadEmail,
        mediaType: mediaType,
        lessonVid: lessonVid,
      }), // * Make sure JSON data
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) =>
        alert(
          "Submitted! You will receive the result in your email in about 5 minutes (for a ~20s video) :)"
        )
      )
      .catch((error) => {
        console.log("CAUGHT ERROR");
        console.log(error);
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <h2 className="sub-heading">{text}</h2>

      <div className="first-media">
        <Uploader mediaType={mediaType} />
      </div>

      <div>
        {lessonVid ? (
          <Uploader mediaType="video/mp4" lessonVid={lessonVid} />
        ) : (
          <Uploader mediaType="audio/*" />
        )}
      </div>

      {mediaType === "video/*" ? (
        <ul className="video-requirements">
          <li>Video must have a face in every frame!</li>
          <li>We recommend a short video ~10-20s long :)</li>
        </ul>
      ) : (
        <></>
      )}

      <form onSubmit={handleSubmit(submit)} className="uploads">
        <CustomButton text="Submit" className="btn-submit"></CustomButton>
        <Button variant="contained" disabled>
          Disabled
        </Button>
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

  .first-media {
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

export default withRouter(Upload);
