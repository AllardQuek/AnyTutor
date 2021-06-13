import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = ({ mediaType }) => {
  const axios = require("axios").default;

  // * Initialize variables to empty string
  let [url, inputContent, contentType] = "";

  if (mediaType === "audio/*") {
    // * Endpoints to AWS Lambda functions that will fetch pre-signed URLs
    url =
      "https://nf4yot096j.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedURL";
    inputContent = "Drop 1 Audio File";
    contentType = "audio/*";
  } else if (mediaType === "video/mp4") {
    url =
      "https://5n58vjjzdd.execute-api.ap-southeast-1.amazonaws.com/default/getVidPresignedURL";
    inputContent = "Drop 1 Video File";
    contentType = "video/mp4";
  } else {
    url = ""; // TODO: Create image URL
    inputContent = "Drop 1 Image File";
    contentType = "image/*";
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    // We limit uploads to only 1
    const f = files[0];
    console.log(f["file"]);

    console.log("Uploading to S3...");
    const response = await axios({
      method: "GET",
      url: url,
    });

    // * Using the returned URL, make a PUT request to upload media to S3 bucket
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
      },
      body: f["file"], // ! WATCH OUT !
    });

    console.log("Result: ", result);
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
      styles={{
        dropzone: {
          overflow: "auto",
        },
        dropzoneReject: {
          borderColor: "red",
          backgroundColor: "#DAA",
        },
        inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
      }}
    />
  );
};

export default Uploader;
