const SET_TOKEN = 'mind-map/SET_TOKEN';

const initalState = {
    token : '',
}

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token,
})

const tokenReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_TOKEN:
            return {...state, token: action.payload}

        default:
            return state;
    }
}

export default tokenReducer;