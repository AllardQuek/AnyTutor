import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import styled from "styled-components";

import Uploader from "./Uploader";

const DestUploader = ({
  destType,
  setDestType,
  firstUpload,
  setFirstUpload,
}) => {
  const handleDestChange = (event) => {
    setDestType(event.target.value);
  };

  return (
    <DestUploaderStyled>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sync your lesson to:</FormLabel>
        <RadioGroup
          aria-label="mediaType"
          name="destMediaType"
          value={destType}
          onChange={handleDestChange}
          row
        >
          <FormControlLabel value="image/*" control={<Radio />} label="Image" />
          <FormControlLabel
            value="video/mp4"
            control={<Radio />}
            label="Video"
          />
        </RadioGroup>
      </FormControl>
      <div className="dest-media">
        <Uploader
          mediaType={destType}
          lessonVid={false} // Will always be false for destination
          nthUpload={firstUpload}
          setNthUpload={setFirstUpload}
        />

        {destType === "video/mp4" && (
          <ul className="video-requirements">
            <li>Video must have a face in every frame!</li>
            <li>We recommend a short video, about 10s long will do! :)</li>
          </ul>
        )}
      </div>
    </DestUploaderStyled>
  );
};

const DestUploaderStyled = styled.div``;

export default DestUploader;
