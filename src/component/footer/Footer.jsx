// import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

// export default function Footer() {
//   return (
//     <footer className="footer container-fluid border border-dark fixed-bottom">
//       Footer
//     </footer>
//   );
// }
function Footer() {
  return (
    <footer className="container-fluid border border-dark p-3 d-flex justify-content-center align-items-center">
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
          ©Your Website {new Date().getFullYear()}.
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
