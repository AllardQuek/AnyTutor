import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const AudioVideoUploader = ({ isAudio }) => {
  const axios = require("axios").default;

  const url = isAudio
    ? "https://nf4yot096j.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedURL"
    : "https://5n58vjjzdd.execute-api.ap-southeast-1.amazonaws.com/default/getVidPresignedURL";

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
        "Content-Type": isAudio ? "audio/*" : "video/mp4",
      },
      body: f,
    });

    console.log("Result: ", result);
  };

  return (
    <Dropzone
      //   getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept={isAudio ? "audio/*" : "video/*"}
      maxFiles={1}
      multiple={false}
      submitButtonDisabled={(files) => files.length > 1}
      inputContent={isAudio ? "Drop 1 Audio File" : "Drop 1 Video File"}
      styles={{
        dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
        inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
      }}
    />
  );
};

export default AudioVideoUploader;
