import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaDownload } from "react-icons/fa6";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview = ({ resumeData }) => {
  const onDownloadClick = async () => {
    // get the paper element
    let paperelement = document.getElementById("result");
    // creates a canvas(image) of that element, html2canvas returns a promise so handled with
    // asyanc await, argumnts scsle-2 refers to increase resolution to 2x (to in crease the image clarity)
    let paperCavas = await html2canvas(paperelement, { scale: 2 });

    // converting the image into a canvas

    let paperImageData = paperCavas.toDataURL("image/png");
    console.log(paperImageData);

    // pdf converting p-potrait, mm- milli meter , a4 - paper size
    let pdf = new jsPDF("portrait", "mm", "a4");

    let pdfWidth = pdf.internal.pageSize.getWidth();
    let pdfheight = (paperCavas.height * pdfWidth) / paperCavas.width;

    pdf.addImage(paperImageData, "png", 0, 0, pdfWidth, pdfheight);
    pdf.save("Resume.pdf");
  };

  return (
    <div className="container ms-5">
      <button onClick={onDownloadClick}>
        {" "}
        <FaDownload />
      </button>
      <Paper id="result" sx={{ height: 650 }} elevation={10}>
        <Typography variant="h6" align="center">
          {resumeData.fullName || "Name"}
        </Typography>
        <Typography variant="h6" align="center">
          {resumeData.title || "Title"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">{resumeData.phno || "Ph no"} |</Typography>
          <Typography align="center">
            {resumeData.email || "Email"} |
          </Typography>
          <Typography align="center">
            {resumeData.location || "Location"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          GitHub: <a href="">{resumeData.github || "GitHub Link"}</a>
          &nbsp;&nbsp;|&nbsp; LinkedIn:{" "}
          <a href="">{resumeData.linkedin || "LikedIn Link"}</a>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "8px" }}>
          Portfolio: <a href="">{resumeData.portfolio || "Portfolio Link"}</a>
        </Box>
        <Divider sx={{ mt: 4 }}>Summary</Divider>
        <Typography align="center">{resumeData.summary}</Typography>
        <Divider sx={{ mt: 4 }}>Education</Divider>
        <Typography align="center" sx={{ mt: 2 }}>
          {resumeData.coursename || "Course Name"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.college || "College Name"}
          </Typography>
          |
          <Typography align="center">
            {resumeData.university || "University"}
          </Typography>
          |<Typography align="center">{resumeData.year || "Year"}</Typography>
        </Box>
        <Divider sx={{ mt: 5 }}>Proffesional Experience</Divider>
        <Typography align="center" sx={{ mt: 2 }}>
          {resumeData.jobtitle || "Job Title"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.company || "Company"}
          </Typography>
          |
          <Typography align="center">
            {resumeData.joblocation || "Location"}
          </Typography>
          |
          <Typography align="center">
            {resumeData.duration || "Duration"}
          </Typography>
        </Box>
        <Divider sx={{ mt: 5 }}>Skill</Divider>

        <Stack direction={"row"} ml={2} spacing={2}>
          {Array.isArray(resumeData.skills) &&
            resumeData.skills.map((eachskill, index) => (
              <Button key={index} variant="outlined">
                {eachskill}
              </Button>
            ))}
        </Stack>
      </Paper>
    </div>
  );
};

export default Preview;
