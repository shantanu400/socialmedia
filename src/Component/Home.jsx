import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Slice/userSlice.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./style/Home.css";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [reqSearch, setReqSearch] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h3>Social Media For Travellers</h3>
      <div className="input-group flex-nowrap">
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
      <div className="cards">
        {console.log(user)}
        {user.loading && <p>Loading...</p>}
        {!user.loading && <p>{user.error}</p>}
        {!user.loading && user.users && user.users.length ? (
          <>
            {user.users
              .filter((item) =>
                item.title.toLowerCase().includes(reqSearch.toLowerCase())
              )
              .map((person) => (
                <div className="eachcard" key={person.id}>
                  <div
                    onClick={() => {
                      navigate(`/viewproduct/${person.id}`);
                    }}
                  >
                    <Card sx={{ width: 345, height: 345 }}>
                      <CardMedia
                        sx={{ width: 345, height: 140 }}
                        image={`https://picsum.photos/200?random=${person.id}`}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {person.title.length > 25
                            ? person.title.substring(0, 25)
                            : person.title}
                        </Typography>
                        <div
                          className="details"
                          style={{ display: "flex", justifyContent: "centre" }}
                        >
                          <div>
                            <Typography
                              className="abouttxt"
                              variant="body2"
                              color="text.secondary"
                            >
                              {person.body.length > 90
                                ? person.body.substring(0, 90) + "..."
                                : person.body}
                              <span>
                                <Button
                                  size="small"
                                  onClick={() => {
                                    navigate(`/viewproduct/${person.id}`);
                                  }}
                                >
                                  Read More
                                </Button>
                              </span>
                            </Typography>
                          </div>
                          <span>
                            <CardActions className="openbtn">
                              <Button
                                style={{
                                  backgroundColor: "orange",
                                  color: "white",
                                }}
                                onClick={() => {
                                  navigate(`/viewproduct/${person.id}`);
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
          </>
        ) : null}
      </div>
    </>
  );
};

export default Home;
