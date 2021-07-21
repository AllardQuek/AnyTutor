import styled from "styled-components";

const UploadInfo = () => {
  return (
    <UploadInfoStyled>
      <h2 className="sub-heading">Customize your inputs!</h2>

      <h3 className="sample-info">
        No files to upload? Download samples{" "}
        <a
          href="https://drive.google.com/drive/folders/1IT7qzq-z5cxpZHn4pfRvFoAC2jFUONK6?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here!
        </a>
      </h3>

      <div className="additional-info">
        <p>
          Max File Length: <strong>1 minute</strong>
        </p>
        <p>
          Max File Size: <strong>10MB</strong>
        </p>
      </div>
    </UploadInfoStyled>
  );
};

const UploadInfoStyled = styled.div`
  .sub-heading {
    margin: 1rem;
  }

  .sample-info {
    margin-bottom: 1rem;
  }

  .additional-info {
    margin-bottom: 2rem;
  }
`;

export default UploadInfo;
