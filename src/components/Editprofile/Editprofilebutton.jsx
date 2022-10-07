import React from "react";
import { useState } from "react";
import BackDrop from "../Profileslidedrawer/Backdrop";
import EditslideDrawer from "./Editprofilesidedrawer";

function Editprobutton(props){
    const [editdrawerOpen, seteditDrawerOpen] = useState(false);

    function handleOpenDrawerButton() {
      seteditDrawerOpen(true);
      console.log(editdrawerOpen);
      const close=props.closeDrawer;
      close();

    }
  
    function handleBackdropClick() {
        seteditDrawerOpen(false);
       
    }
    // function closeeditDrawer(){
    //     handleOpenDrawerButton();
        
    //     const close=props.closeDrawer;
    //     close();
       
        

    // }
  
    // console.log(editdrawerOpen);
  
    return (<>
    <div ><button >Edit___profile</button></div>
 
    </>
    );
}

export default Editprobutton;