import React from "react";
import "./styles.css";
import { useState } from "react";
import SlideDrawer from "../Profileslidedrawer/Slidedrawer";
import Backdrop from "../Profileslidedrawer/Backdrop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfileModal } from "../../redux/reducers/users";

function Profilemodal(props) {
  const isIconClicked = useSelector(
    (state) => state.reducers.userprofile.isIconClicked
);
const dispatch = useDispatch()

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawerButton=() => {
    dispatch(handleProfileModal(false))
    setDrawerOpen(!drawerOpen);
    
  
  }

  function handleBackdropClick() {
    setDrawerOpen(false);
  }


  return (
    <div className="profile-modal">
      <div className="profile-image-div"><img className="profile-image-icon" src="images\profile@3x.png" alt="profile-image" /></div>
      <div className="profile-image"><span className="profile-name">Hyder Marakkar</span></div>
      <div className="profile-image"><span className="profile-gmail">hyder.marakkar@gmail.com</span></div>
      <div className="profile-btn"><button className="button-editprofile"><span className="edit-profile">Edit Profile</span></button></div>
      <div className="profile-category profile-hov" onClick={() => dispatch(handleProfileModal(false))}><div><img src="images/user-6-line.svg" alt="user-6" /></div><div className="profile-name-div"><p className="profile-cat-name">My profile</p></div></div>
      <SlideDrawer show={drawerOpen} closeDrawer={handleBackdropClick} />
      {drawerOpen && <Backdrop />}
      <div className="profile-category profile-hov"><div><img src="images/layout-cards.svg" alt="user-6" /></div><div className="profile-name-div"><p className="profile-cat-name">My advertisements</p></div></div>
      <div className="profile-category profile-hov"><div><img src="images/heart-line.svg" alt="user-6" /></div><div className="profile-name-div"><p className="profile-cat-name">My favorites</p></div></div>
      <div className="profile-category profile-hov"><div><img src="images/logout-box-r-line.svg" alt="user-6" /></div><div className="profile-name-div"><p className="profile-cat-name">Logout</p></div></div>
    </div>
  );
}

export default Profilemodal;
