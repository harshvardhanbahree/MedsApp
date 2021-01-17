import { AppBar, Toolbar, makeStyles} from "@material-ui/core";
import React from "react";
import Avatar from '@material-ui/core/Avatar';
import health from './img.png';
import Notification from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#FFFFFF",
    height:"60px",
    paddingRight:"0px",
    position : "fixed",
    top: 0,
    overflow:"hidden",
    boxShadow:"none"
  },

  logo: {
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },

  fonts:{
    color: "#000000",
    listStyleType: "none",
    
    paddingLeft: "60px",
  },

  li:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"600",
    fontSize: "13px",
    display:"inline",
    padding: "25px",
  },

  li1:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"600",
    fontSize: "13px",
    display:"inline",
    padding: "22px",
    backgroundColor:"#3ca5e3",
    color: "white",
  },
  
  li3:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"600",
    fontSize: "13px",
    display:"inline",
    marginLeft:"715px",
  },

  li4:{
    marginLeft: "1130px",
    marginBottom: "-50px",
marginTop: "-32px"
  },

  
}));


export default function Header() {
  const { header } = useStyles();
  const {fonts} = useStyles();
  const {li} = useStyles();
  const {li1} = useStyles();
  const {li3} = useStyles();
  const {li4} = useStyles();

  const displayDesktop = () => {
    return <Toolbar>
      {femmecubatorLogo}
      {menus()}
    </Toolbar>;
  };

  const femmecubatorLogo = (
    <img src={health} height="58px" width="77px" alt="description">

      </img>
  );

  const menus = () => {
      return(
        
        <div style={{marginTop:"-40px", marginLeft:"10px"}}>
         <ul className = {fonts}>
                      <li className={li1}>PATIENTS</li>
                      <li className={li}>CALENDAR</li>
                      <li className={li}>USERS</li>
                      <li className={li}>BILLING</li> 
                      <li className={li3}>
          <Badge color="secondary" variant="dot"><Notification />
                                                </Badge></li>
                                                <li className={li4}><Avatar src alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" /></li>
                                                                                      
          </ul>                        
        </div>
      );
  };



  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}