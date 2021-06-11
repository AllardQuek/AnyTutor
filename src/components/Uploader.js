import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = ({ mediaType }) => {
  const axios = require("axios").default;

  const url =
    mediaType === "audio/*"
      ? "https://nf4yot096j.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedURL"
      : mediaType === "image/*"
      ? "" // TODO: Update image presigned URL
      : "https://5n58vjjzdd.execute-api.ap-southeast-1.amazonaws.com/default/getVidPresignedURL";

  const inputContent =
    mediaType === "audio/*"
      ? "Drop 1 Audio File"
      : mediaType === "image/*"
      ? "Drop 1 Image File"
      : "Drop 1 Video File";

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    // We limit uploads to only 1
    const f = files[0];
    console.log(f.meta);
    f.remove();

    console.log("Uploading to S3...");
    const response = await axios({
      method: "GET",
      url: url,
    });

    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": { mediaType },
      },
      body: f,
    });

    console.log("Result: ", result);
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
