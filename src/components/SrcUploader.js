import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
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
  voice,
  setVoice,
}) => {
  const handleVoiceChange = (event) => {
    setVoice(event.target.value);
  };

  const handleSrcChange = (event) => {
    setSrcType(event.target.value);
  };

  const handleChangeText = (event) => {
    setUploadText(event.target.value);
  };

  return (
    <SrcUploaderStyled>
      <FormControl component="fieldset">
        <FormLabel component="legend">1. Lesson Media Type:</FormLabel>
        <RadioGroup
          className="radio-row"
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
        <div>
          <TextField
            className="text-field"
            id="outlined-multiline-static"
            label="Your text here"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChangeText}
          />
          <FormControl className="form-control">
            <InputLabel htmlFor="voice-native-helper">Voice Type</InputLabel>
            <NativeSelect
              value={voice}
              onChange={handleVoiceChange}
              inputProps={{
                name: "voice",
                id: "voice-native-helper",
              }}
            >
              <option value="Joanna">US female</option>
              <option value="Joey">US male</option>
              <option value="Geraint">Welsh male</option>
              <option value="Raveena">Indian female</option>
            </NativeSelect>
            <FormHelperText>Select your voice</FormHelperText>
          </FormControl>
        </div>
      )}
    </SrcUploaderStyled>
  );
};

const SrcUploaderStyled = styled.div`
  .text-field {
    width: 100%;
  }

  .form-control {
    margin-top: 1rem;
  }

  .radio-row {
    width: 110%; // Display as single row on mobile
  }
`;

export default SrcUploader;
