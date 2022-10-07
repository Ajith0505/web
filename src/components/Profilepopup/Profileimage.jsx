import React from "react";
import Profilemodal from "./Profilemodal";
import { useSelector } from "react-redux";


function Profileimage (props) {
  const isIconClicked = useSelector(
    (state) => state.reducers.userprofile.isIconClicked
);
  return (
    <>
    <img src="images/profile.png" alt="not3" />
    {isIconClicked && (<Profilemodal />)}
    </>
  );
}

export default Profileimage;
