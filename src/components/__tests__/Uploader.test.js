import "@testing-library/jest-dom"; // Adding here to remove linting errors
import Dropzone from "react-dropzone-uploader";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Dropzone
        onChangeStatus={jest.fn()}
        onSubmit={jest.fn()}
        accept="audio/mp3"
        maxFiles={1}
        multiple={false}
        submitButtonDisabled={(files) => files.length > 1}
        inputContent="Drop 1 Audio File of Speech"
        PreviewComponent={false} // Cannot pass props here!
        disabled={false}
        styles={{
          dropzone: {
            overflow: "auto",
            padding: "1.5rem",
            backgroundColor: "var(--dropzone-bg-color)",
          },
          dropzoneReject: {
            borderColor: "red",
            backgroundColor: "#DAA",
          },
          submitButton: {
            borderRadius: "45px",
            color: "var(--font-light-color)",
            backgroundColor: "var(--primary-color)",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
            fontWeight: 500,
            letterSpacing: "1.2px",
            fontFamily: "Roboto",
          },
          preview: {},
          inputLabel: {
            color: "var(--dropzone-font-color)",
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
