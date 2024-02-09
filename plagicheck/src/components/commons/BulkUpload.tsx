import styled from "styled-components";
import { Button, SecondaryButton } from "./Button";
import { FaArrowLeftLong } from "react-icons/fa6";

type Props = {};

const BulkUpload = (props: Props) => {
  return (
    <Container>
      <div className="Wrapper w-[100%] flex flex-col gap-10 items-start">
        <SecondaryButton variant="plain" className="!px-0">
          <FaArrowLeftLong />
          Back
        </SecondaryButton>
        <div className="">
          <h2>Bulk Upload for Lecturers</h2>
        </div>
        <div className="instruction">
          <h3>Instructions</h3>
          <ol>
            <li>Download the CSV template</li>
            <li>
              Fill in the required information in the following format: Name
              (First name and last name), Email address, Phone number,
              Department, Qualification.
            </li>
            <li>Upload the completed CSV file</li>
          </ol>
        </div>
        <div className="template">
          <h3>Download CVS Template</h3>
          <p>
            Download the CSV template to fill in the required information for
            bulk upload.
          </p>
          <SecondaryButton className="!w-[197px]">
            Download Template
          </SecondaryButton>
        </div>
        <div className="uploadFile">
          <h3>Upload CSV File</h3>
          <p>
            Choose a CSV file from your computer to initiate the bulk upload
            process.
          </p>
          <Button className="!w-[197px]">Browse</Button>
        </div>
      </div>
    </Container>
  );
};

export default BulkUpload;

const Container = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    font-weight: bold;
  }
`;
