import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import VP from "./style/Viewproduct.module.css";
import { setuserInfo, setchangeId } from "../Slice/userSlice";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const Viewproduct = () => {
  const user = useSelector((state) => state.user.users);
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(user.userInfo);
  const person = user.find((eachperson) => eachperson.id === Number(id));
  const userId = person.userId;
  const navigate = useNavigate();

  return (
    <>
      <div
        className={VP.clickedprod}
        style={{ display: "flex", alignItems: "center" }}
      >
        <ArrowBackIcon
          fontSize="large"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "40px",
            boxShadow: "2px 2px 20px 0px #8E8481",
            margin: "2%",
          }}
          onClick={() => {
            navigate("/");
          }}
        />

        <Typography style={{ marginTop: "1%" }} gutterBottom variant="h4">
          Post Number
          {id}
        </Typography>
      </div>
      <div
        className={VP.insideprodicon}
        style={{
          backgroundImage: `url(https://picsum.photos/200?random=${person.id})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={VP.handle}>
          <div className={VP.post}>
            Post Number
            <div className={VP.logo}>
              <CiShare2 />
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
      <div className={VP.buttonpair}>
        {
          <div className={VP.detailsubtn}>
            {user.detailsbtn ? (
              <div
                style={{ backgroundColor: "#F05A22", color: "white" }}
                onClick={() => dispatch(setuserInfo(false))}
                className={VP.detailsbtn}
              >
                Details
              </div>
            ) : (
              <div
                style={{ backgroundColor: "#C4C4C4", color: "black" }}
                onClick={() => dispatch(setuserInfo(false))}
                className={VP.detailsbtn}
              >
                Details
              </div>
            )}

            {userInfo ? (
              <div
                style={{ backgroundColor: "#F05A22", color: "white" }}
                onClick={() => dispatch(setuserInfo(true))}
                className={VP.userbtn}
              >
                User
              </div>
            ) : (
              <div
                style={{ backgroundColor: "#C4C4C4", color: "black" }}
                onClick={() => dispatch(setuserInfo(true))}
                className={VP.userbtn}
              >
                User
              </div>
            )}
          </div>
        }
        <div className={VP.detailsuserbody}>
          {userInfo && (
            <div>
              <p>
                <b>UserId:</b> {person.userId}
              </p>
              <p>
                <b>ID:</b> {person.id}
              </p>
              <p>
                <b>Title:</b> {person.title}
              </p>
            </div>
          )}
          {!userInfo && person.body}
        </div>
      </div>

      

      <div className={VP.cards}>
        <h2 style={{ marginLeft: "-85%" }}>
          <b>More Posts</b>
        </h2>
        <div>
          {user
            .filter((persons) => persons.userId === userId && persons.id != id)
            .map((person) => (
              <div className={VP.eachcard} key={person.id}>
                <div
                  style={{ margin: "0%", padding: "0%" }}
                  onClick={() => {
                    dispatch(setchangeId(true));
                    navigate(`/viewproduct/${person.id}`);
                  }}
                >
                  <Card sx={{ width: 320, height: 345 }}>
                    <CardMedia
                      sx={{ width: 345, height: 140 }}
                      image={`https://picsum.photos/200?random=${person.id}`}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {person.title.length > 15
                          ? person.title.substring(0, 15)
                          : person.title}
                      </Typography>
                      <div
                        style={{ display: "flex", justifyContent: "centre" }}
                      >
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            {person.body.length > 70
                              ? person.body.substring(0, 70) + "..."
                              : person.body}
                            <span>
                              <Button size="small">Read More</Button>{" "}
                            </span>
                          </Typography>
                        </div>
                        <span>
                          <CardActions>
                            <Button
                              style={{
                                backgroundColor: "orange",
                                color: "white",
                              }}
                            >
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
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Viewproduct;
