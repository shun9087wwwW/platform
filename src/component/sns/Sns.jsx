import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Sns() {
  return (
    <div
      id="contact"
      className="sns container-fluid border border-dark w-100 bg-light p-2 d-flex justify-content-center align-items-center"
    >
      <YouTubeIcon color="error" />
      Youtube
      <TwitterIcon color="info" className="ms-2" />
      Twitter
    </div>
  );
}
