import React from "react";
// import { AppBar, Toolbar, CssBaseline } from "@mui/material";
// import {makeStyles} from "@mui/styles";
// import { Link, useLocation } from "react-router-dom";

function NavBar() {
  return <div>NavBar</div>;
}


// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: "sticky",
//     top: 0,
//     marginTop: 0,
//   },
//   navlinks: {
//     marginLeft: theme.spacing(15),
//     display: "flex",
//     justifyContent: "space-around",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "18px",
//     marginTop: "5px",
//     marginLeft: theme.spacing(20),
//   },
//   activeLink: {
//     border: "1px solid white",
//     padding: "3px",
//     paddingLeft: "10px",
//     paddingRight: "10px",
//     borderRadius: "5px",
//     marginTop: "3px",
//     fontSize: "20px",
//   },
// }));

// function NavBar() {
//   const classes = useStyles();
//   const location = useLocation();

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <CssBaseline />
//       <Toolbar>
//         <div className={classes.navlinks}>
//           <Link
//             to="/search"
//             className={`${classes.link} ${
//               location.pathname === "/search" ? classes.activeLink : ""
//             }`}
//           >
//             Search
//           </Link>
//           <Link
//             to="/home"
//             className={`${classes.link} ${
//               location.pathname === "/" ? classes.activeLink : ""
//             }`}
//           >
//             Home
//           </Link>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }

export default NavBar;
