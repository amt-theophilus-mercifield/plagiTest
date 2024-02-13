import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, SecondaryButton } from "./Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const BulkUpload = () => {
  const [progress, setProgress] = useState({
    started: false,
    percentageComplete: 0,
  });

  const [file, setFile] = useState<object | null>(null);

  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log(file);
      console.log(typeof e.target.files);
      console.log(e.target.files);
    } else {
      console.log("no file set");
    }
  };

  const handleFileUpload = async () => {
    if (file) {

      const formData = new FormData();
      formData.append("file", file);

      try {
        await axios.post(
          "https://0681-196-61-44-226.ngrok-free.app/api/lecturers/bulk",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file");
      }
    } else {
      alert("Please select a file to upload");
    }
  };

  const handleDownload = () => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/1-oQ0AxPPmr5dqDWw1tentn3OefCNM0Qh8UpSearX8MY/edit?usp=sharing",
        {
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
        }
      )
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
      {/* {message && (
        <div className="pregress-bar absolute top-0 right-0 left-0 bottom-0 w-full h-full flex flex-col gap-2 items-center justify-center ">
          <progress max="100" value={progress.percentageComplete}></progress>
          <span>{message}</span>
        </div>
      )} */}
      <div className="Wrapper w-[100%] flex flex-col gap-10 items-start">
        <SecondaryButton variant="plain" className="!px-0 hover:text-blue-500 !hover:bg-none">
          <FaArrowLeftLong />
          Back
        </SecondaryButton>
        <div className="">
          <h2>Bulk Upload for Lecturers</h2>
        </div>
        <div className="instruction">
          <h3>Instructions</h3>
          <ol className="list-decimal">
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
          <div className="btns flex w-full h-full justify-between">
            <div className="browseBtn h-full">
              <label htmlFor="browseBtn" className="">
                Browse
              </label>
              <input
                className=""
                type="file"
                id="browseBtn"
                name="upload"
                hidden
                onChange={handleFileChange}
              />
            </div>
            <SecondaryButton onClick={handleFileUpload} className="w-[197px]">
              Upload
            </SecondaryButton>
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
  display: relative;

  h3, h2 {
    font-weight: bold;
  }

  .browseBtn {
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
