import { useState } from "react";

import { useForm } from "react-hook-form";
import styled from "styled-components";

import CustomBeatLoader from "../components/CustomBeatLoader";
import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import Disclaimers from "../components/Disclaimers";
import Snack from "../components/Snack";
import UploaderDest from "../components/UploaderDest";
import UploaderSrc from "../components/UploaderSrc";
import UploadInfo from "../components/UploadInfo";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const Upload = () => {
  const { handleSubmit } = useForm();
  const [secondUpload, setSecondUpload] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const uploadEmail = currentUser.email;
  const successMessage =
    "Submitted! You will receive the result video in your email when it is ready. This should take about 5 minutes for a ~20s video. Please contact us at anytutor.official@gmail.com if you face any difficulties! :)";
  const errorMessage =
    "Sorry, our services are currently not running. Please contact anytutor.official@gmail.com for assistance!";
  const [uploadText, setUploadText] = useState("");
  const [firstUpload, setFirstUpload] = useState(false);
  const [destType, setDestType] = useState("video/mp4");
  const [srcType, setSrcType] = useState("lesson");
  const lessonVid = srcType === "lesson" ? true : false;
  const [voice, setVoice] = useState("Joanna");
  const [complete, setComplete] = useState("");
  const [error, setError] = useState("");

  const submit = (data) => {
    setSubmitting(true);

    // * Endpoint to lambda that will run our notebook
    const url =
      "https://8c3vifq9mj.execute-api.ap-southeast-1.amazonaws.com/default/test-socket";
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        // No need to overwrite Access-Control-Allow-Origin	here!
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: uploadEmail,
        uploadText: uploadText,
        lessonVid: lessonVid,
        mediaType: destType,
        voice: voice,
      }), // Make sure JSON data
    })
      .then((res) => res.json())
      .then((res) => {
        return typeof res === "string"
          ? setComplete(successMessage) // AWS Lambda returns string if successful
          : setError(errorMessage); // If AWS services are not running
      })
      .then(() => setSubmitting(false)) // Should be inside the fetch scope to avoid jumping ahead
      .catch((error) => {
        console.log(error);
        setError(error);
        setSubmitting(false); // Still set to false when fetch fails
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <UploadInfo />

      <div className="dropzones">
        <div className="src-media">
          <UploaderSrc
            srcType={srcType}
            setSrcType={setSrcType}
            firstUpload={firstUpload}
            setFirstUpload={setFirstUpload}
            setUploadText={setUploadText}
            lessonVid={lessonVid}
            voice={voice}
            setVoice={setVoice}
          />
        </div>
        <UploaderDest
          destType={destType}
          setDestType={setDestType}
          secondUpload={secondUpload}
          setSecondUpload={setSecondUpload}
        />
        <form onSubmit={handleSubmit(submit)} className="uploads">
          {/* If both uploads have been made enable submit button */}
          {(firstUpload || uploadText) && secondUpload && !submitting ? (
            <CustomButton text="Submit" className="btn-submit" />
          ) : (
            <DisabledButton text="Submit" className="btn-submit" />
          )}
        </form>
        <CustomBeatLoader submitting={submitting} />
      </div>

      <h5>Send results to: {currentUser.email}</h5>
      <Disclaimers />
      <Snack severity="success" message={complete} setMessage={setComplete} />
      <Snack
        severity="error"
        message={error} // If error is not empty string, show Snack
        setMessage={setError}
      />
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

  .dropzones {
    width: 60%;
    display: inline-block;
  }

  .src-media {
    margin-bottom: 2.5rem;
  }

  // Styles for all radio buttons in child components
  // Just the numbered headers for the radio buttons
  .MuiFormLabel-root.form-label {
    color: var(--font-light-color);
  }

  // Default radio button outline color
  .MuiButtonBase-root {
    color: var(--font-light-color);
  }

  // Radio button checked color
  .MuiRadio-colorSecondary.Mui-checked {
    color: var(--success-color);
  }
`;

export default Upload;
