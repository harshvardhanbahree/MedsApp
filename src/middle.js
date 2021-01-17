import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import {ThemeProvider} from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#3ca5e3",
    fontSize:"10px",

    '&:hover': {
      backgroundColor: "blue",
    },
  },
}))(Button);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#e8f5fe",
    color: "black",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#F5F5F5",
      color:"black"
    },
  },
}))(TableRow);

const theme1 = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        //This can be referred from Material UI API documentation.
        padding: "1px 1px",
        borderBottom: "none",

      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#F7F7F7",
    marginLeft: "245px",
   
  },
  content: {
    paddingLeft: "50px",
    paddingTop: "10px",
    marginTop: "70px",

    },
  font:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"600",
    fontSize: "14px",
 
  },
  dateUpper:{
          marginTop:"-20px",
          marginLeft:"860px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarRoot:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tableRoot:{
    width: '91%',
    height:'10%',
    overflowX: "auto",
    padding:"none"
  },
  
  table:{ 
    width:"100%",
  },
  table3:{
    width:"75%",
    marginLeft:"291px",
  },
  cell1:{
    color:"grey",
    fontSize:"0.7rem",
    lineHeight:"1.5",
    backgroundColor:"white",
    fontWeight:"bold",
    borderTop:"1px solid #F7F7F7",
    borderRight:"1px solid #F7F7F7",
    borderLeft:"2px solid #F7F7F7",
    borderBottom:"1px solid #F7F7F7"
  },
  cell2:{
    color:"#3AB6F4",
    fontWeight:"bold",
    fontSize:"0.7rem",
    lineHeight:"1.5",
    backgroundColor:"white",
    borderTop:"1px solid #E9E9E9",
    borderRight:"1px solid #E9E9E9",
    borderLeft:"1px solid #E9E9E9"
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    
    <div style={{backgroundColor:"white"}}>
    <ThemeProvider theme={theme1}>
    <div className={classes.root}>
        <main className={classes.content}>
        <Typography >
          
          <div className={classes.font}>Patient Information</div>
         
                             <div className={classes.dateUpper}>
                                   <div style={{color:"grey" ,fontSize: "10px"}}>Last updated:</div>
                                    <div style={{color:"black" ,fontSize: "10px" ,marginLeft: "73px",marginTop: "-15px"}}>10:25 AM,today
 {/* Right Upper date */}              <IconButton aria-label="settings" style={{marginTop: "-37px",marginLeft: "71px"}}>  
                                        <MoreHorizIcon />
                                      </IconButton>
                                  </div>  
                            </div>
          
          
          {/* Avatar */}
          <div className={classes.avatarRoot}>
                  <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" className={classes.large} />
        </div>

          {/* Name */}
          <div style={{fontSize:"17px" ,fontWeight:"bold",marginTop:"-70px",marginLeft:"78px"}}>
              Sara Smith
            </div>
         <div style={{marginTop:"5px"}}> 
          {/* Table 1 */}
          <Paper size ='small' className={classes.tableRoot} style={{backgroundColor:"#F7F7F7 ",border:"transparent",boxShadow:"none",marginLeft:"80px",marginTop:"0px"}}>
          <ThemeProvider theme={theme1}>
                    <Table >
                        <TableBody >
                            <TableRow  >
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"12px",fontWeight:"bold"}}>
                                Phone:
                            </TableCell>
                            <TableCell  align="left"  style={{fontWeight:"bold",fontSize:"11px" , paddingLeft:"0px"}}>302-857-9685</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"12px",fontWeight:"bold"}}>
                                Surgery type:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>Rotator Cuff Repair</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"12px",fontWeight:"bold"}}>
                                Anesthesiologiest:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>Dr.Christina Hardaway</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"12px",fontWeight:"bold"}}>
                                Surgery Clearnce
                            </TableCell>
                            </TableRow>
                        
                            <TableRow className={classes.tableHead}>
                            <TableCell  component="th" scope="row" style={{color:"Grey",fontSize:"11px",fontWeight:"bold"}}>
                                Email:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>sarasmith@gmail.com</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey",fontSize:"11px",fontWeight:"bold"}}>
                                Surgery Date:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px",fontWeight:"bold"}}>15 Aug 2020</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey",fontSize:"11px",fontWeight:"bold"}}>
                                Anesthesiologiest Phone:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>301-896-8745</TableCell>

                            </TableRow>

                            <TableRow className={classes.tableHead}>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px", paddingLeft:"0px",fontWeight:"bold"}}>
                                Gender:
                            </TableCell>
                            <TableCell  align="left" style={{minWidth:100, maxWidth:100,fontWeight:"bold",fontSize:"11px",paddingLeft:"0px"}}>Female</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px",fontWeight:"bold"}}>
                                Height (cm):
                            </TableCell>
                            <TableCell  align="left" style={{minWidth:100, maxWidth:100,fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>163</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px",fontWeight:"bold"}}>
                                Anesthesiologiest Email:
                            </TableCell>
                            <TableCell  align="left" style={{minWidth:100, maxWidth:100,fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>christina@h3a.com</TableCell>
                            </TableRow>

                            <TableRow className={classes.tableHead}>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px",fontWeight:"bold"}}>
                                Age:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>45</TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px",fontWeight:"bold"}}>
                                Weight (lb):
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>110</TableCell>
                            </TableRow>
                            <TableRow className={classes.tableHead}>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px", paddingLeft:"0px"}}>
                                
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px"}}></TableCell>
                            <TableCell  component="th" scope="row" style={{color:"Grey" ,fontSize:"11px",fontWeight:"bold"}}>
                                BMI:
                            </TableCell>
                            <TableCell  align="left" style={{fontWeight:"bold",fontSize:"11px", paddingLeft:"0px"}}>19</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </ThemeProvider>
                </Paper>

        <Avatar style= {{marginLeft: "930px",marginTop:"-60px", width: 60, height: 60, backgroundColor: "#43c43f"}}>Yes</Avatar>

         <Table  style={{ width :600, fontSize:"4px",backgroundColor:"white",marginLeft: "0px",
            marginTop: "71px"}} aria-label="simple table">
        <TableBody>
            <TableRow >
              <TableCell align="center" className={classes.cell2}>List of prior Surgeries</TableCell>
              <TableCell align="center" className={classes.cell1}>List of Medical Diagnosis</TableCell>
              <TableCell align="center" className={classes.cell1}>List of Medications</TableCell>
              <TableCell align="center" className={classes.cell1}>Airway Evalution</TableCell>
              <TableCell align="center" className={classes.cell1}>Anesthesia Clearnece and Recommecdation</TableCell>
            </TableRow>
            </TableBody>
      </Table>               

    </div>
                  </Typography>
      </main>
    </div>
    
      {/* Table1 */}
      <div style={{backgroundColor:"white" ,width:"340px",marginLeft:"294px",marginTop:"26px"}}>
   
    <Table className={classes.table} aria-label="customized table" variant="outlined">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{paddingLeft:"10px",fontSize:"11px", fontWeight:"bold",color:"grey"}}>First Time Surgery</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" style={{fontSize:"11px",paddingLeft:"10px"}}>
                No
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </div>
    
    {/* Table2 */}
    <div style={{backgroundColor:"white" ,width:"340px",marginLeft:"294px",marginTop:"26px"}}>
   
    <Table className={classes.table} aria-label="customized table" variant="outlined">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{paddingLeft:"10px",fontSize:"11px", fontWeight:"bold",color:"grey"}}>Family History of Surgical Complications?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" style={{fontSize:"11px",paddingLeft:"10px"}}>
                Yes
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </div>

    {/* Table3 */}
    <div style={{backgroundColor:"white" ,width:"340px",marginLeft:"294px",marginTop:"26px"}}>
   
    <Table className={classes.table} aria-label="customized table" variant="outlined">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{paddingLeft:"10px",fontSize:"11px", fontWeight:"bold",color:"grey"}}>If Yes, please provide more details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" style={{fontSize:"11px",paddingLeft:"10px"}}>
                Lorem ipusm dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat ex ut commodo mollis.Proin sapien mauris,
                porttitor eget augue vitae, vehicula scelerisque eros.
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </div>
    
    <p style={{color:"black",marginLeft:"292px",fontSize:"11px", fontWeight:"bold",color:"grey"}}>Previous Surgeries</p>

    {/* Table4 */}
 
    <Table size='medium' className={classes.table3} aria-label="customized table " variant="outlined">
        <TableHead style={{
    height:"50px"}}>
          <TableRow>
            <StyledTableCell align="left"style={{paddingLeft:"10px",fontSize:"11px", fontWeight:"bold",color:"grey" }}>Surgery Type</StyledTableCell>
            <StyledTableCell align="left" style={{fontSize:"11px", fontWeight:"bold",color:"grey" }}>Date</StyledTableCell>
            <StyledTableCell align="left" style={{fontSize:"11px", fontWeight:"bold",color:"grey" }}>Anesthesia Type</StyledTableCell>
            <StyledTableCell align="left" style={{fontSize:"11px", fontWeight:"bold",color:"grey" }}>Surgeical Complications</StyledTableCell>
            <StyledTableCell align="left"style={{fontSize:"11px", fontWeight:"bold",color:"grey" }}>Antesthetic Complications</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>     
              <StyledTableCell align="left" style={{fontSize:"11px", paddingLeft:"10px"}}>Shoulder reconstructions</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px"}}>January 2008</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px"}}>General "Breathing Tube"</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px"}}>No</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px"}}>No</StyledTableCell>
              <StyledTableCell align="left" style={{color:"grey"}}><DeleteIcon fontSize="small"/><EditSharpIcon fontSize="small"/></StyledTableCell>
            </StyledTableRow>
         
        </TableBody>
       </Table>
      <br/>
      <ColorButton style={{marginLeft:"288px"}} variant="contained" color="primary" className={classes.margin}>
        + Add Surgery
      </ColorButton>
      <br/>
      <br/>
      <br/>
   </ThemeProvider> 
   </div>
  );
}

