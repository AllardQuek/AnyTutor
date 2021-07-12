import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import styled from "styled-components";

import Uploader from "./Uploader";

const SrcUploader = ({
  srcType,
  setSrcType,
  secondUpload,
  setSecondUpload,
  setUploadText,
  lessonVid,
}) => {
  const handleSrcChange = (event) => {
    setSrcType(event.target.value);
  };

  const handleChangeText = (event) => {
    setUploadText(event.target.value);
  };

  return (
    <SrcUploaderStyled>
      <FormControl component="fieldset">
        <FormLabel component="legend">Lesson Media Type:</FormLabel>
        <RadioGroup
          aria-label="sourceMediaType"
          name="srcMediaType"
          value={srcType}
          onChange={handleSrcChange}
          row
        >
          <FormControlLabel value="lesson" control={<Radio />} label="Lesson" />
          <FormControlLabel value="audio" control={<Radio />} label="Audio" />
          <FormControlLabel value="text" control={<Radio />} label="Text" />
        </RadioGroup>
      </FormControl>

      {/* If text show text field,
		  If audio, show audio uploader,
		  If lesson, show lesson uploader. 
		*/}
      {srcType === "lesson" && (
        <div>
          <Uploader
            mediaType="video/mp4"
            uploadLesson={lessonVid} // true
            nthUpload={secondUpload}
            setNthUpload={setSecondUpload}
          />
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
          className="text-field"
          id="outlined-multiline-static"
          label="Your text here"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChangeText}
        />

        // TODO: Add on options to change the output voice
      )}
    </SrcUploaderStyled>
  );
};

const SrcUploaderStyled = styled.div`
  .text-field {
    width: 100%;
  }
`;

export default SrcUploader;
