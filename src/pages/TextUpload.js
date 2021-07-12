import { useState } from "react";

import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import Disclaimers from "../components/Disclaimers";
import Uploader from "../components/Uploader";
import UploadInfo from "../components/UploadInfo";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const TextUpload = ({ text }) => {
  const { handleSubmit } = useForm();
  const [uploadText, setUploadText] = useState("");
  const [firstUpload, setFirstUpload] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const uploadEmail = currentUser.email;
  const successMessage =
    "Submitted! You will receive the result video in your email when it is ready. This should take about 5 minutes for a ~20s video. Please contact us at anytutor.official@gmail.com if you face any difficulties! :)";
  const handleChangeText = (event) => {
    setUploadText(event.target.value);
  };

  const submit = (data) => {
    setSubmitting(true);

    // * Endpoint to lambda that will run our notebook
    const url =
      "https://8c3vifq9mj.execute-api.ap-southeast-1.amazonaws.com/default/test-socket";

    console.log(url);
    console.log(uploadEmail);
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: uploadEmail,
        uploadText: uploadText,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then(() => {
        setSubmitting(false);
        alert(successMessage);
      })
      .catch((error) => {
        setSubmitting(false);
        console.log(error);
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <UploadInfo text={text} />

      <div className="dropzones">
        <div className="first-media">
          <Uploader
            mediaType="video/mp4"
            lessonVid={false}
            nthUpload={firstUpload}
            setNthUpload={setFirstUpload}
          />
          <ul className="video-requirements">
            <li>Video must have a face in every frame!</li>
            <li>We recommend a short video, about 10s long will do! :)</li>
          </ul>
        </div>

        <TextField
          className="text"
          id="outlined-multiline-static"
          label="Your text here"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChangeText}
        />
      </div>

      <form onSubmit={handleSubmit(submit)} className="uploads">
        {/* If both inputs have been made, enable submit button */}
        {firstUpload && uploadText && !submitting ? (
          <CustomButton text="Submit" className="btn-submit" />
        ) : (
          <DisabledButton text="Submit" className="btn-submit" />
        )}
      </form>

      <h5>Send results to: {currentUser.email}</h5>
      <Disclaimers />
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
    margin-bottom: 0.5rem;
  }

  .text {
    width: 100%;
  }

  .first-media {
    margin-bottom: 2.5rem;
  }

  .video-requirements,
  .lesson-requirements {
    list-style: none;
    padding: 0;
    margin-top: 0.5rem;
  }

  .dropzones {
    width: 60%;
    display: inline-block;
  }
`;

export default TextUpload;
