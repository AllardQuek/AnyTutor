import { useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = ({ mediaType, lessonVid, setNthUpload }) => {
  const axios = require("axios").default;
  const [loading, setLoading] = useState(false);
  console.log(lessonVid);

  // * Initialize variables to empty string
  let [url, inputContent, contentType] = "";

  if (mediaType === "audio/*") {
    // * Endpoints to AWS Lambda functions that will fetch pre-signed URLs
    url =
      "https://nf4yot096j.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedURL";
    inputContent = "Drop 1 Speech Audio File";
    contentType = "audio/*";
  } else if (mediaType === "video/mp4") {
    url = lessonVid
      ? "https://h5dh9a36jl.execute-api.ap-southeast-1.amazonaws.com/default/getLessonPresignedURL"
      : "https://5n58vjjzdd.execute-api.ap-southeast-1.amazonaws.com/default/getVidPresignedURL";
    inputContent = lessonVid ? "Drop 1 Lesson Video" : "Drop 1 Video File";
    contentType = "video/mp4";
  } else {
    url =
      "https://6s7sw5hnci.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedImageURL";
    inputContent = "Drop 1 Image File of a Face";
    contentType = "image/jpeg";
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    setLoading(true);

    // We limit uploads to only 1
    const f = files[0];

    const response = await axios({
      method: "GET",
      url: url,
    });

    // * Using the returned URL, make a PUT request to upload media to S3 bucket
    await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
      },
      body: f["file"], // ! WATCH OUT !
    });

    setNthUpload(true); // Keep track which files have been uploaded
    setLoading(false); // Disable uploader if file is already uploading
    alert("File uploaded successfully!");
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept={mediaType}
      maxFiles={1}
      multiple={false}
      submitButtonDisabled={(files) => files.length > 1}
      inputContent={inputContent}
      disabled={loading}
      styles={{
        dropzone: {
          overflow: "auto",
        },
        dropzoneReject: {
          borderColor: "red",
          backgroundColor: "#DAA",
        },
        submitButton: {
          borderRadius: "45px",
          color: "var(--white-color)",
          boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
          fontWeight: 500,
          letterSpacing: "1.2px",
          fontFamily: "Roboto",
        },
        inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
      }}
    />
  );
};

export default Uploader;
