import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {
   const welcomeUser = async () =>{
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
   }
   welcomeUser();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img className="w-25 p-3" src={Robot} alt="" />
      <div className="alert alert-success" role="alert">
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      </div>
      
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: black;
  }
`;
