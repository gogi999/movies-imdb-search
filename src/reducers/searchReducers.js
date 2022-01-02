export const searchReducer = (state = null, action) => {
    switch (action.type) {
        case 'SEARCH_TERM':
            return action.payload;

        default: 
            return state;
    }
}
