import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import "./Event.css";
import axios from "axios";
import { DataContext } from "../../context/Datacontext";
import { useNavigate } from "react-router";
function Events() {
  const [events, setEvents] = useState([]);
  const { token ,logoutUser} = useContext(DataContext);
  const navigate=useNavigate()

  useEffect(() => {
    getAllData()
  }, []);
  const getAllData=()=>{
    axios
      .get(" http://localhost:5000/events", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      });
  }
  const handleLogout=()=>{
    logoutUser();
    navigate('/')
  }
  const handleDelete=(id)=>{
    console.log(id);
    axios.delete(` http://localhost:5000/delete/${id}`).then((response)=>(
      console.log('deleted')
    ))
    getAllData()
  }
  
  return (
    <div className="main-section">
      <h1>Event Management</h1>
      <table>
        <tr>
          <th>No.</th>
          <th>Event name</th>
          <th>Place</th>
          <th>Date</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {events &&
          events.map((val,index) => (
            <>
              <tr key={index}>
                <td>{index+1}</td>
                <td>{val.ename}</td>
                <td>{val.place}</td>
                <td>{val.edate}</td>
                <td>
                  <FaEye />
                </td>
                <td>
                  {" "}
                  <FaEdit />
                </td>
                <td>
                  <MdDelete onClick={()=>handleDelete(val._id)} />
                </td>
              </tr>
            </>
          ))}
          <tr style={{textAlign:'center',}}>
          </tr>

        
      </table>
      <div style={{display:'flex',gap:'10px'}}>
      <button onClick={()=>navigate('/addevent')}>Add events</button>
      <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}

export default Events;
