import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegEdit } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { putfn } from "../services/AllApi";



const Editcomponent = ({ resumeData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [skillInput, setskillInput] = useState('')

  const [editData, seteditData] = useState(resumeData);

  const onAddSkill = ()=>{
    seteditData({...editData,skills:[...editData.skills,skillInput]})
  }

  const editedData = async () =>{
    let editedResponse = await putfn(editData.id,editData)
    console.log(editedResponse.data)

  }

console.log(editData)
  return (
    <div>
      <Button className="btn" onClick={handleShow}>
        <FaRegEdit className="fs-3 text-warning" />
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Resumes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <TextField
                value={editData.fullName}
                onChange={(e) =>
                  seteditData({ ...editData, fullName: e.target.value })
                }
                id="location"
                label="full name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                id="location"
                value={editData.location}
                onChange={(e) =>
                  seteditData({ ...editData, location: e.target.value })
                }
                label="job title"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.email}
                onChange={(e) =>
                  seteditData({ ...editData, email: e.target.value })
                }
                id="location"
                label="location"
                variant="standard"
                sx={{ width: "100%" }}
              />

              <TextField
                value={editData.phno}
                onChange={(e) =>
                  seteditData({ ...editData, phno: e.target.value })
                }
                id="email"
                label="Email"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.email}
                onChange={(e) =>
                  seteditData({ ...editData, email: e.target.value })
                }
                id="phno"
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.github}
                onChange={(e) =>
                  seteditData({ ...editData, github: e.target.value })
                }
                id="gitlink"
                label="Github Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.linkedin}
                onChange={(e) =>
                  seteditData({ ...editData, linkedin: e.target.value })
                }
                id="linkedinlink"
                label="LinkedIn Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.portfolio}
                onChange={(e) =>
                  seteditData({ ...editData, portfolio: e.target.value })
                }
                id="portfoliolink"
                label="Portfolio Link"
                variant="standard"
                sx={{ width: "100%" }}
              />

              <TextField
                value={editData.coursename}
                onChange={(e) =>
                  seteditData({ ...editData, coursename: e.target.value })
                }
                id="coursename"
                label="Course Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </div>
            <div className="col-6">
              <TextField
                value={editData.college}
                onChange={(e) =>
                  seteditData({ ...editData, college: e.target.value })
                }
                id="collegename"
                label="College Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.university}
                onChange={(e) =>
                  seteditData({ ...editData, university: e.target.value })
                }
                id="university"
                label="University"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.year}
                onChange={(e) =>
                  seteditData({ ...editData, year: e.target.value })
                }
                id="yearofpass"
                label="Year of Passout"
                variant="standard"
                sx={{ width: "100%" }}
              />

              <TextField
                value={editData.joblocation}
                onChange={(e) =>
                  seteditData({ ...editData, joblocation: e.target.value })
                }
                id="jobinternship"
                label="Job or Internship"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.company}
                onChange={(e) =>
                  seteditData({ ...editData, company: e.target.value })
                }
                id="companyname"
                label="Company Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.email}
                onChange={(e) =>
                  seteditData({ ...editData, email: e.target.value })
                }
                id="location1"
                label="Location"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                value={editData.duration}
                onChange={(e) =>
                  seteditData({ ...editData, duration: e.target.value })
                }
                id="duration"
                label="Duration"
                variant="standard"
                sx={{ width: "100%" }}
              />

              {/* <TextField
                
                id="skills"
             
                label="Add Skill"
                variant="standard"
                sx={{ width: "100%" }}
              /> */}

              <TextField
                value={editData.summary}
                onChange={(e) =>
                  seteditData({ ...editData, summary: e.target.value })
                }
                multiline
                rows={4}
                id="summary"
                label="write a short summary of yourself"
                variant="standard"
                sx={{ width: "100%", margin: "10px" }}
              />
            </div>

            <div>


<h6>skills</h6>
<div className="d-flex gap-2">
{
   editData.skills.map((value,index)=>(
    <button key={index} className="btn">{value}</button>
   ))
}



</div>


                
              <div className="d-felx">
                <TextField
                  
                 onChange={(e)=>setskillInput(e.target.value)}
                  id="skills"
                  label="Add Skill"
                  variant="standard"
                  sx={{ width: "50%" }}
                />
                <Button onClick={onAddSkill}>ADD SKILL</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            editedData()
            handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Editcomponent;
