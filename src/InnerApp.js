import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import uuid from "react-uuid";

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
  const [orgChart, setOrgChart] = useState([
    {
      id: uuid(),
      name: "",
      children: [],
    },
  ]);

  const addChild = (node, parentId) => {
    return {
      ...node,
      parentId,
      children: node.children.map((child) => addChild(child, node.id)),
    };
  };

  const handleAddChild = (event, nodeId) => {
    setOrgChart((prev) => {
      const updatedChart = [...prev];
      const parentNode = findNodeById(updatedChart, nodeId);

      if (parentNode) {
        const newChild = {
          id: uuid(),
          name: "",
          parentId: parentNode.id,
          children: [],
        };

        parentNode.children.push(addChild(newChild, parentNode.id));
      }

      return updatedChart;
    });
  };

  // Recursive function to find a node by its id
  const findNodeById = (nodes, targetId) => {
    for (let node of nodes) {
      if (node.id === targetId) {
        return node;
      }
      if (node.children.length > 0) {
        const foundNode = findNodeById(node.children, targetId);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  };

  const handleInputChange = (event, nodeDatum) => {
    setOrgChart((prev) => {
      const updatedChart = [...prev];
      const nodeIndex = updatedChart.findIndex(
        (item) => item.id === nodeDatum.id
      );

      if (nodeIndex !== -1) {
        updatedChart[nodeIndex] = {
          ...updatedChart[nodeIndex],
          name: event.target.value,
        };
      } else {
        // Find the node recursively
        const findNode = (nodes, targetId) => {
          for (let node of nodes) {
            if (node.id === targetId) {
              return node;
            }
            if (node.children.length > 0) {
              const foundNode = findNode(node.children, targetId);
              if (foundNode) {
                return foundNode;
              }
            }
          }
          return null;
        };

        const targetNode = findNode(updatedChart, nodeDatum.id);

        if (targetNode) {
          targetNode.name = event.target.value;
        }
      }

      return updatedChart;
    });
  };

  const handleDeleteChild = (childId) => {
    setOrgChart((prevChart) => {
      const updatedChart = prevChart.map((node) => {
        const parentNode = findParentNode(prevChart, node, childId);
        if (parentNode) {
          parentNode.children = parentNode.children.filter(
            (child) => child.id !== childId
          );
        }

        return node;
      });

      return updatedChart;
    });
  };

  const findParentNode = (nodes, targetNode, childId) => {
    for (let node of nodes) {
      if (node.children.includes(targetNode)) {
        return node;
      }
      if (node.children.length > 0) {
        const parentNode = findParentNode(node.children, targetNode, childId);
        if (parentNode) {
          return parentNode;
        }
      }
    }
    return null;
  };

  const renderCustomNodeElement = ({ nodeDatum }) => {
    const isParentNode = nodeDatum.children && nodeDatum.children.length > 0;

    return (
      <g>
        <circle r={30} fill={isParentNode ? "blue" : "green"} />
        <g>
          <foreignObject
            x={-12}
            y={34}
            width={600}
            height={500}
            // onClick={() => handleDeleteChild(nodeDatum.id)}
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <input
                value={nodeDatum.name}
                style={{
                  width: "80px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderBottom: "1px dotted #000",
                  outline: "none",
                  "&:focus": {
                    border: "none",
                    borderBottom: "1px solid #000",
                  },
                }}
                onChange={(e) => handleInputChange(e, nodeDatum)}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <button onClick={(e) => handleAddChild(e, nodeDatum.id)}>
                  +
                </button>
                <button onClick={(e) => handleDeleteChild(nodeDatum.id)}>
                  -
                </button>
              </div>
            </div>
          </foreignObject>
        </g>
      </g>
    );
  };

  return (
    <>
      <Tree data={orgChart} renderCustomNodeElement={renderCustomNodeElement} />
    </>
  );
};

export { MainNode };
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
