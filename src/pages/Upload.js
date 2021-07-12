import { useState } from "react";

import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import Disclaimers from "../components/Disclaimers";
import Uploader from "../components/Uploader";
import UploadInfo from "../components/UploadInfo";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const Upload = () => {
  const { handleSubmit } = useForm();
  const [firstUpload, setFirstUpload] = useState(false);
  const [secondUpload, setSecondUpload] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const uploadEmail = currentUser.email;
  const successMessage =
    "Submitted! You will receive the result video in your email when it is ready. This should take about 5 minutes for a ~20s video. Please contact us at anytutor.official@gmail.com if you face any difficulties! :)";
  const [text, setText] = useState("Upload your files here.");
  const [uploadText, setUploadText] = useState("");
  const [mediaType, setMediaType] = useState("video/mp4");
  const [srcType, setSrcType] = useState("lesson");
  const lessonVid = srcType === "lesson" ? true : false;

  const handleDestChange = (event) => {
    setMediaType(event.target.value);
  };

  const handleSrcChange = (event) => {
    setSrcType(event.target.value);
  };

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
        // No need to overwrite Access-Control-Allow-Origin	here!
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uploadText: uploadText, // Need this if not AWS Lambda cannot find this field
        email: uploadEmail,
        mediaType: mediaType,
        lessonVid: lessonVid,
      }), // Make sure JSON data
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => {
        setSubmitting(false);
        alert(successMessage);
      })
      .catch((error) => {
        console.log("CAUGHT ERROR");
        console.log(error);
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <UploadInfo text={text} />

      <div className="dropzones">
        <FormControl component="fieldset">
          <FormLabel component="legend">Destination Media Type</FormLabel>
          <RadioGroup
            aria-label="mediaType"
            name="destMediaType"
            value={mediaType}
            onChange={handleDestChange}
            row
          >
            <FormControlLabel
              value="image/*"
              control={<Radio />}
              label="Image"
            />
            <FormControlLabel
              value="video/mp4"
              control={<Radio />}
              label="Video"
            />
          </RadioGroup>
        </FormControl>
        <div className="first-media">
          <Uploader
            mediaType={mediaType}
            lessonVid={lessonVid}
            nthUpload={firstUpload}
            setNthUpload={setFirstUpload}
          />

          {mediaType === "video/mp4" && (
            <ul className="video-requirements">
              <li>Video must have a face in every frame!</li>
              <li>We recommend a short video, about 10s long will do! :)</li>
            </ul>
          )}
        </div>

        {/* If text show text field,
            If audio, show audio uploader,
            If lesson, show lesson uploader.
        */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Source Media Type</FormLabel>
          <RadioGroup
            aria-label="sourceMediaType"
            name="srcMediaType"
            value={srcType}
            onChange={handleSrcChange}
            row
          >
            <FormControlLabel
              value="lesson"
              control={<Radio />}
              label="Lesson"
            />
            <FormControlLabel value="audio" control={<Radio />} label="Audio" />
            <FormControlLabel value="text" control={<Radio />} label="Text" />
          </RadioGroup>
        </FormControl>
        {srcType === "lesson" && (
          <div>
            <Uploader
              mediaType="video/mp4"
              uploadLesson={lessonVid} // true
              nthUpload={secondUpload}
              setNthUpload={setSecondUpload}
            />

            <p className="lesson-requirements">
              Recommended lesson video length: 30 seconds to 1 minute
            </p>
          </div>
        )}
        {srcType === "audio" && (
          <div>
            <Uploader
              mediaType="audio/*"
              uploadLesson={lessonVid} // true
              nthUpload={secondUpload}
              setNthUpload={setSecondUpload}
            />
          </div>
        )}
        {srcType === "text" && (
          <TextField
            className="text"
            id="outlined-multiline-static"
            label="Your text here"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChangeText}
          />
        )}
      </div>

      <form onSubmit={handleSubmit(submit)} className="uploads">
        {/* If both uploads have been made enable submit button */}
        {firstUpload && (secondUpload || uploadText) && !submitting ? (
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

  .text {
    width: 100%;
  }
`;

export default Upload;
