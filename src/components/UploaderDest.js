import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import styled from "styled-components";

import Uploader from "./Uploader";

const UploaderDest = ({
  destType,
  setDestType,
  secondUpload,
  setSecondUpload,
}) => {
  const handleDestChange = (event) => {
    setDestType(event.target.value);
  };

  return (
    <UploaderDestStyled>
      <FormControl component="fieldset">
        <FormLabel className="form-label" component="legend">
          2. Sync your lesson to:
        </FormLabel>
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
          nthUpload={secondUpload}
          setNthUpload={setSecondUpload}
          successMessage="Destination file uploaded!"
        />

        {destType === "video/mp4" && (
          <div className="video-requirements">
            <p>Video must have a face in every frame!</p>
            <p>We recommend a short video, about 10s long will do! :)</p>
          </div>
        )}
      </div>
    </UploaderDestStyled>
  );
};

const UploaderDestStyled = styled.div`
  .form-label {
    color: var(--font-light-color);
  }

  .video-requirements {
    margin-bottom: 2rem;
  }
`;

export default UploaderDest;
