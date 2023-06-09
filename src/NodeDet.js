import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import { MainNode } from "./InnerApp";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postNodes } from "./redux/nodes";
import { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import uuid from "react-uuid";

const NodeDet = () => {
  const { unique_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orgChart, setOrgChart] = useState([]);
  const currentNode = useSelector((state) => state.nodes.nodes);
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentTarget = currentNode.find(
      (ele) => ele.unique_id === unique_id
    );
    if (currentTarget) {
      setData(currentTarget);
      setOrgChart(currentTarget.tree);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [currentNode, unique_id]);

  return !loading ? (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: "1.44rem 1.88rem" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#000",
            fontFamily: "Roboto",
          }}
        >
          {data.name ? data.name : "Map Details"}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        sx={{ height: "100%" }}
        alignItems="center"
      >
        <Box
          sx={{
            height: "600px",
            width: "100%",
          }}
        >
          <MainNode orgChart={orgChart} setOrgChart={setOrgChart} />
        </Box>
      </Grid>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          p: "1rem 1rem 1rem 0",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", width: "15%", gap: "0.5rem" }}>
          <button className="cancel-btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <div style={{ width: "100px" }}>
            <button
              className="create-btn"
              onClick={() => {
                setTimeout(() => {
                  setLoading(false);
                  navigate("/");
                }, 1000);
              }}
            >
              Save
            </button>
          </div>
        </Box>
      </Box>
    </Grid>
  ) : (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default NodeDet;
