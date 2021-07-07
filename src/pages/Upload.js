import { useState } from "react";

import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import Uploader from "../components/Uploader";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const Upload = ({ text, mediaType, lessonVid }) => {
  const { handleSubmit } = useForm();
  const [firstUpload, setFirstUpload] = useState(false);
  const [secondUpload, setSecondUpload] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const uploadEmail = currentUser.email;

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
        email: uploadEmail,
        mediaType: mediaType,
        lessonVid: lessonVid,
      }), // Make sure JSON data
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => {
        setSubmitting(false);
        alert(
          // eslint-disable-next-line no-multi-str
          "Submitted! You will receive the result video in your email when it is ready. \
          This should take about 5 minutes for a ~20s video. \
          Please contact us at anytutor.official@gmail.com if you face any difficulties! :)"
        );
      })
      .catch((error) => {
        console.log("CAUGHT ERROR");
        console.log(error);
      });
  };

  return (
    <AppStyled>
      <BackgroundStyle />
      <h2 className="sub-heading">{text}</h2>

      <h3 className="sample-link">
        Don't have files to upload? Download samples{" "}
        <a
          href="https://drive.google.com/drive/folders/1IT7qzq-z5cxpZHn4pfRvFoAC2jFUONK6?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here!
        </a>
      </h3>

      <div className="first-media">
        <Uploader
          mediaType={mediaType}
          lessonVid={false}
          nthUpload={firstUpload}
          setNthUpload={setFirstUpload}
        />

        {mediaType === "video/mp4" ? (
          <ul className="video-requirements">
            <li>Video must have a face in every frame!</li>
            <li>We recommend a short video, about 10s long will do! :)</li>
          </ul>
        ) : (
          <></>
        )}
      </div>

      {lessonVid ? (
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
      ) : (
        <Uploader
          mediaType="audio/*"
          uploadLesson={lessonVid} // false
          nthUpload={secondUpload}
          setNthUpload={setSecondUpload}
        />
      )}

      <form onSubmit={handleSubmit(submit)} className="uploads">
        {/* If both uploads have been made enable submit button */}
        {firstUpload && secondUpload && !submitting ? (
          <CustomButton text="Submit" className="btn-submit" />
        ) : (
          <DisabledButton text="Submit" className="btn-submit" />
        )}
      </form>

      <h5>Send results to: {currentUser.email}</h5>

      <div className="disclaimers">
        <h3>Disclaimers:</h3>
        <br />
        <p>
          For the process to work, we will need to turn on our backend services.
          However, this costs real money and so to cut costs we will turn on the
          services <strong>only while we are developing</strong>.
        </p>
        <br />
        <p>
          If you'd like to test the features out, please reach out to us at
          <a href="mailto:anytutor.official@gmail.com">
            {" "}
            anytutor.offical@gmail.com
          </a>{" "}
          to make arrangements with us. Thank you!
        </p>
        <br />
        <p>Please only make 1 submission at a time.</p>
        <p>
          Only your latest request will be processed, provided there are no
          other requests currently in progress.
        </p>
        <br />
        <p>
          Quality of the generated video may be reduced to speed up processing
          and reduce consumption of our limited resources.
        </p>
        <br />
        <p>We seek your understanding on these matters. Thank you!</p>
      </div>
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

  .sub-heading {
    margin: 1rem;
  }

  .sample-link {
    margin-bottom: 2rem;
  }

  .disclaimers {
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: 1rem;
    width: 50%;
    display: inline-block;
    border: 1px solid var(--secondary-color);
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default withRouter(Upload);
