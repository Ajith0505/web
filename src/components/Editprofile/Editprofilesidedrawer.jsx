import React from "react";
import "./styles.css";



const EditslideDrawer = (props) => {
  let drawerClasses = props.show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <div><img className="drawer-background" src="images/background.svg" alt="profile-background" />
      <div className="sidedrawer-heading">Profile</div> 
      <div className="sample" onClick={props.closeDrawer}><img className="sample-pro-img" src="images/close-line.svg" alt="cross-image" /></div>
     
      </div>
    </div>
  );
};

export default EditslideDrawer;
