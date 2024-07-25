import React,{useState} from "react";
import "./style/Viewproduct.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./style/Home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Viewproduct = () => {
  const user = useSelector((state) => state.user.users);
  const { id } = useParams();
  const person = user.find((person) => person.id === Number(id));
  const userId = person.userId;
  const navigate=useNavigate();
  const [userinfo,setUserinfo]=useState(false);

  return (
    <>
      <div className="clickedprod">
        <Button style={{ marginLeft: "-1%" }} onClick={()=>{
            navigate("/");
        }} >
          {" "}
          <ArrowBackIcon fontSize="large" className="arrow" style={{backgroundColor:"white",color:"black", borderRadius:"40px",boxShadow: "2px 2px 20px 0px #8E8481"}} />
        </Button>
        <Typography className="name" gutterBottom variant="h4">
          {person.title.length > 25
            ? person.title.substring(0, 25)
            : person.title}
          {id}
        </Typography>
      </div>

      <div
        style={{ marginBottom: "1%", marginLeft: "2%",gap:"2%", display:"flex" }}
        key={person.id}
      >
        <Card sx={{ width: 400, height: 230 }}>
          <CardMedia
            sx={{ height: 230, width:400 }}
            image={`https://picsum.photos/200?random=${person.id}`}
            title="green iguana"
          />
        </Card>
        <span><div>
        <Button variant="contained" style={{ backgroundColor: 'orange', color: 'white',height:"5%",margin:"3%", marginTop:"0%",boxShadow: "2px 2px 20px 0px #F9C5B9" }} onClick={()=>setUserinfo(false)}>Details</Button>
        <span>
        <Button variant="contained" style={{ backgroundColor: 'white', color: 'Black',height:"5%",marginTop:"-3%",boxShadow: "2px 2px 20px 0px #E0E0E0" } }onClick={()=>setUserinfo(true)}>User Info</Button>
        </span>
        </div>
        <Typography variant="body2" color="text.secondary">
        {userinfo && 
        <div>
            <p><b>UserId:</b> {person.userId}</p>
            <p><b>ID:</b> {person.id}</p>
            <p><b>Title:</b> {person.title}</p>
        </div>
        }
          {!userinfo && person.body}
        </Typography>
        </span>
      </div>
      <div className="cards">
        
        {user
          .filter((persons) => persons.userId === userId && persons.id!=id)
          .map((person) => (
            <div className="eachcard" key={person.id}>
                <Button style={{margin:"0%",padding:"0%"}} onClick={() => {
                            navigate(`/viewproduct/${person.id}`)
                            
                          }}>
              
              <Card sx={{ width: 300, height: 345 }}>
                <CardMedia
                  sx={{  width:345, height: 140}}
                  image={`https://picsum.photos/200?random=${person.id}`}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {person.title.length > 15
                      ? person.title.substring(0, 15)
                      : person.title}
                    
                  </Typography>
                  <div className="details" style={{display:"flex",justifyContent:"centre"}}>
                    <div>
                    <Typography className="abouttxt" variant="body2" color="text.secondary">
                      {person.body.length > 70
                        ? person.body.substring(0, 70) + "..."
                        : person.body}
                      <span>
                        <Button
                          size="small"
                          onClick={() => {
                            navigate(`/viewproduct/${person.id}`)
                            
                          }}
                        >

                          Read More
                        </Button>{" "}
                      </span>
                    </Typography>
                    </div>
                    <span>

                    
                      <CardActions className="openbtn">
                        <Button style={{ backgroundColor: 'orange', color: 'white' }} onClick={() => {
                            navigate(`/viewproduct/${person.id}`)
                            
                          }}>
                          <NavigateNextIcon
                            fontSize="large"
                            variant="contained"
                          />
                        </Button>
                      </CardActions>
                      </span>
                    
                    
                  </div>
                </CardContent>
              </Card>
              </Button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Viewproduct;
