import { Grid } from "@mui/material";
import Tree from "react-d3-tree";

const SideNav = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        height: "100%",
      }}
    >
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
      <Grid
        item
        xl={1.5}
        lg={1.5}
        md={1.6}
        sm={1.5}
        xs={1}
        sx={{
          height: "100vh",
          borderRadius: "8px",
          border: "1px solid #d9d9d9",
          background: "#f1f3f5",
        }}
      >
        <SideNav />
      </Grid>

      <Grid item xl={10} lg={10} md={10} sx={{ height: "100vh" }}>
        <MainNode />
      </Grid>
    </Grid>
  );
};

export default InnerApp;
