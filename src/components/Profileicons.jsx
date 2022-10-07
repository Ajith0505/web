import React from "react";
import Profileimage from "./Profilepopup/Profileimage";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfileModal } from "../redux/reducers/users";

function Profileicons() {

    const isIconClicked = useSelector(
        (state) => state.reducers.userprofile.isIconClicked
    );
    const dispatch = useDispatch()

    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) =>{
            if (!menuRef.current.contains(event.target)){
                dispatch(handleProfileModal(false));
            }
        };

        document.addEventListener("mousedown",handler);
        
        return () => {
            document.removeEventListener("mousedown",handler);
        };
    });
    
    return (
   <div className="login-icons"> <img src="images/notification.svg" alt="not-img" /> <img src="images/notification-bell.svg" alt="notimg2" />
    <button ref={(menuRef)} className="profile-button" onClick={() => dispatch(handleProfileModal(true)) }><Profileimage /></button> </div>
  );
  }
  
  export default Profileicons;  
  