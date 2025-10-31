import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteResume, displayResume } from "../services/AllApi";
import { Col, Row } from "react-bootstrap";
import Preview from "../components/Preview";
import { MdDelete } from "react-icons/md";
import Editcomponent from "../components/Editcomponent";




const History = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    loadresume();
  }, []);

  const loadresume = async () => {
    let apiresponse = await displayResume();

    if (apiresponse.status == 200) {
      //store data
      setdata(apiresponse.data);
    } else {
      Swal.fire({
        title: "error",
        text: "something went wrong",
        icon: "error",
      });
    }
  };



  const onDeleteClick=async(id)=>{
    let apiresponse = await deleteResume(id)
    if(apiresponse.status==200){
      Swal.fire({
        title:"Success",
        text:"Resume Deleted Successfully",
        icon:"success"
      })
      loadresume()
    }
    else{
      Swal.fire({
        title:"error",
        text:"something went wrong",
        icon:"error"
      })
    }
  }

  return (
    <div>
      <h1 className="text-center">History page</h1>

      {data.length > 0 ? (
        <Row>
          {data.map((eachdata, index) => (
            <Col md={4} key={index}>

              <div className="d-flex justify-content-end me-5">


              
                <MdDelete    
                onClick={()=>onDeleteClick(eachdata.id)}
                className="fs-1 text-danger fw-bold"
                
                /> 

                <Editcomponent resumeData={eachdata}/>
               </div>  
              <Preview resumeData={eachdata} />
            </Col>
          ))}
        </Row>
      ) : (
        <h1> No History Found</h1>
      )}



    </div>
  );
};

export default History;
