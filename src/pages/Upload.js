import { useState } from "react";

import { useForm } from "react-hook-form";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DestUploader from "../components/DestUploader";
import DisabledButton from "../components/DisabledButton";
import Disclaimers from "../components/Disclaimers";
import SrcUploader from "../components/SrcUploader";
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
    "Sorry, our services are currently not runnning. Please contact anytutor.official@gmail.com for assistance!";
  const [uploadText, setUploadText] = useState("");
  const [firstUpload, setFirstUpload] = useState(false);
  const [destType, setDestType] = useState("video/mp4");
  const [srcType, setSrcType] = useState("lesson");
  const lessonVid = srcType === "lesson" ? true : false;
  const [voice, setVoice] = useState("Joanna");

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
        // console.log(res);
        return typeof res === "string"
          ? alert(successMessage)
          : alert(errorMessage);
      })
      .catch((error) => {
        console.log(error);
      });
    setSubmitting(false);
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <UploadInfo text="Customize your inputs!" />

      <div className="dropzones">
        <div className="src-media">
          <SrcUploader
            srcType={srcType}
            setSrcType={setSrcType}
            secondUpload={secondUpload}
            setSecondUpload={setSecondUpload}
            setUploadText={setUploadText}
            lessonVid={lessonVid}
            voice={voice}
            setVoice={setVoice}
          />
        </div>

        <DestUploader
          destType={destType}
          setDestType={setDestType}
          firstUpload={firstUpload}
          setFirstUpload={setFirstUpload}
        />

        <form onSubmit={handleSubmit(submit)} className="uploads">
          {/* If both uploads have been made enable submit button */}
          {firstUpload && (secondUpload || uploadText) && !submitting ? (
            <CustomButton text="Submit" className="btn-submit" />
          ) : (
            <DisabledButton text="Submit" className="btn-submit" />
          )}
        </form>
      </div>

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

  .dropzones {
    width: 60%;
    display: inline-block;
  }

  // In srcUploader
  .video-requirements {
    list-style: none;
    padding: 0;
    margin-top: 0.5rem;
  }

  .src-media {
    margin-bottom: 2.5rem;
  }
`;

export default Upload;
