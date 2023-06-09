import { Grid, Typography, Box } from "@mui/material";
import { MainNode } from "./InnerApp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNodes } from "./redux/nodes";

const NewNode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orgChart, setOrgChart] = useState([
    {
      id: uuid(),
      name: "",
      children: [],
    },
  ]);

  const [loading, setLoading] = useState(false);

  return (
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
          New Map
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
          <button className="cancel-btn">Cancel</button>
          <div style={{ width: "100px" }}>
            <button
              className="create-btn"
              onClick={() => {
                dispatch(postNodes(orgChart));
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
  );
};

export default NewNode;
