import { Grid } from "@mui/material";
import Tree from "react-d3-tree";

const SideNav = () => {
  return (
    <Grid item container direction="column" sx={{ height: "100%" }}>
      <Grid item>Past Project 1</Grid>
      <Grid item>Past Project 2</Grid>
      <Grid item>Past Project 3</Grid>
    </Grid>
  );
};

const MainNode = () => {
  const orgChart = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "Foreman",
            attributes: {
              department: "Fabrication",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {
              department: "Assembly",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
        ],
      },
    ],
  };
  return (
    <>
      <Tree data={orgChart} />
    </>
  );
};

const InnerApp = () => {
  return (
    <Grid container alignItems={"flex-start"}>
      <Grid item xl={3} lg={3} md={3} sm={3} xs={3} sx={{ height: "100vh" }}>
        <SideNav />
      </Grid>

      <Grid item>
        <MainNode />
      </Grid>
    </Grid>
  );
};

export default InnerApp;
