import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { SecondaryButton } from "./Button";
import { FaArrowLeftLong } from "react-icons/fa6";

type Props = {};

const BulkUpload = (props: Props) => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    // work on file
    if (!file) {
      console.log("No file selected");
      return;
    }
    const fd = new FormData();
    fd.append("file", file);
  };

  const handleDownload = () => {
    axios
      .get("https://drive.google.com/file/d/1MmR9LoZ0lvWN6qeaKqIR1__KEgTFVe14/view?usp=sharing", {
        responseType: "blob",
        onDownloadProgress: function (progressEvent) {
          if (progressEvent.event.lengthComputable) {
            console.log(
              ((progressEvent.loaded / progressEvent.total) * 100).toFixed() +
                "%"
            );
          } else {
            console.log("Download in progress, please wait..");
          }
        },
      })
      .then((obj) => {
        console.log("download completed");
        const url = URL.createObjectURL(obj.data);
        const a = document.createElement("a");
        a.href = url;
        a.download = "users-template.csv";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      .catch((err) => console.log(err));
  };

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
          <SecondaryButton onClick={handleDownload} className="!w-[197px]">
            Download Template
          </SecondaryButton>
        </div>
        <div className="uploadFile">
          <h3>Upload CSV File</h3>
          <p>
            Choose a CSV file from your computer to initiate the bulk upload
            process.
          </p>
          <div className="browse h-full">
            <label htmlFor="browse" className="">
              Browse
            </label>
            <input type="file" id="browse" hidden onChange={handleUpload} />
          </div>
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

  .browse {
    display: flex;
    width: 197px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #0267ff;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease 0s;
    &:hover {
      background-color: #67a4ff;
    }
    &:active {
      background-color: #0252cc;
    }
    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`;
