import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Layout = () => {
  const navigate = useNavigate();

  const currentNode = useSelector((state) => state.nodes.nodes);
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
          Your MindMaps
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        sx={{ height: "100%", p: "2.44rem 2.88rem" }}
        alignItems="center"
      >
        {Array.isArray(currentNode) && currentNode.length ? (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #d9d9d9",
            }}
          >
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    height: "92px",
                    background: "#f8f8fA",
                    borderRadius: "8px",
                  }}
                >
                  <TableCell>Name</TableCell>
                  <TableCell align="right"> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentNode.map((node, nt) => (
                  <TableRow
                    key={nt}
                    sx={{
                      height: "82px",
                    }}
                    hover
                  >
                    <TableCell
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigate(`/List/${node.unique_id}`)}
                    >
                      {node.name}
                    </TableCell>
                    <TableCell align="right">
                      <MoreHorizIcon
                        sx={{
                          fill: "#000",
                          cursor: "pointer",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "800px",
              justifyContent: "center",
            }}
          >
            Looks like you don't have any mindmaps yet.
            <p>All Your Mind Maps Would Appear Here!</p>
            <button className="create-btn" onClick={() => navigate("/New")}>
              Create New
            </button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Layout;
