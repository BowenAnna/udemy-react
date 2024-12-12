import React from "react";

export default function Avatar(props) {
  return (
    <div>
      <img src={props.img} className="circle-img" alt="avatar_img" />
    </div>
  );
}
