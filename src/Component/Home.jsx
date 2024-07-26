import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Slice/userSlice.jsx";
import { setchangeId } from "../Slice/userSlice.jsx";
import "bootstrap/dist/css/bootstrap.css";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import HM from "./style/Home.module.css";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [reqSearch, setReqSearch] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    console.log(user.userInfo);
    console.log(user);
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h3>
        <b>Social Media For Travellers</b>
      </h3>
      <div className="input-group">
        <span className="input-group-text" id="addon-wrapping">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for..."
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => {
            setReqSearch(`${e.target.value}`);
          }}
        ></input>
      </div>
      <div className={HM.cards}>
        {user.loading && <p>Loading...</p>}
        {!user.loading && <p>{user.error}</p>}
        {!user.loading && user.users && user.users.length ? (
          <>
            {user.users
              .filter((item) =>
                item.title.toLowerCase().includes(reqSearch.toLowerCase())
              )
              .map((person) => (
                <div
                  className={HM.eachcard}
                  key={person.id}
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
                      <Typography gutterBottom variant="h5">
                        {person.title.length > 25
                          ? person.title.substring(0, 25)
                          : person.title}
                      </Typography>
                      <div
                        style={{ display: "flex", justifyContent: "centre" }}
                      >
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            {person.body.length > 90
                              ? person.body.substring(0, 90) + "..."
                              : person.body}
                            <span>
                              <Button size="small">Read More</Button>
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
              ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Home;
