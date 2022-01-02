export const showDetailsReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_DETAILS': 
            return !state;

        default:
            return state;
    }
}

export const movieDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case 'MOVIE_DETAIL': 
            return action.payload;

        default: 
            return state;
    }
}
