const intialState = {
  nodes: [],
};

const POST_NODES = "mind-map/POST_NODES";

export const postNodes = (nodes) => ({
  type: POST_NODES,
  payload: nodes,
});

const nodesReducer = (state = intialState, action) => {
  switch (action.type) {
    case POST_NODES:
      return { ...state, nodes: [...state.nodes, action.payload] };

    default:
      return state;
  }
};

export default nodesReducer;
