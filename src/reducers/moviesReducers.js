export const showMoviesReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_MOVIES': 
            return !state;

        default: 
            return state;
    }
}

export const moviesInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'MOVIES_INFO': 
            return [action.payload];

        default: 
            return state;
    }
}
