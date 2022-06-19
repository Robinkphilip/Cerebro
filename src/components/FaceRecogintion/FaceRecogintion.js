import React from "react";

const FaceRecogintion = ({ imgUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imgUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};
export default FaceRecogintion;