import styled from "styled-components";

const Disclaimers = () => {
  return (
    <DisclaimersStyled>
      <div className="disclaimers">
        <h3>Disclaimers:</h3>
        <br />
        <p>
          For the process to work, we will need to turn on our backend services.
          However, this costs real money and so to cut costs we will turn on the
          services <strong>only while we are developing</strong>. If you'd like
          to test the features out, please reach out to us at{" "}
          <a href="mailto:anytutor.official@gmail.com">
            anytutor.offical@gmail.com
          </a>{" "}
          to make arrangements with us. Thank you!
        </p>
        <br />
        <p>
          Please only make 1 submission at a time. Only your latest request will
          be processed, provided there are no other requests currently in
          progress.
        </p>
        <br />
        <p>
          Quality of the generated video may be reduced to speed up processing
          and reduce consumption of our limited resources.
        </p>
        <br />
        <p>We seek your understanding on these matters. Thank you!</p>
      </div>
    </DisclaimersStyled>
  );
};

const DisclaimersStyled = styled.div`
  .disclaimers {
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: 1rem;
    width: 50%;
    display: inline-block;
    border: 1px solid var(--secondary-color);
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default Disclaimers;
