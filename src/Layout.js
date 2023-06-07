import { Box, Grid, Typography } from "@mui/material";

const Layout = () => {
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
        sx={{ height: "100%" }}
        alignItems="center"
      >
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
          <button className="create-btn">Create New</button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
