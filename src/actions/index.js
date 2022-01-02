export const showMoviesAction = () => {
    return {
        type: 'SHOW_MOVIES'
    }
}

export const searchAction = (term) => {
    return {
        type: 'SEARCH_TERM',
        payload: term
    }
}

export const showDetailsAction = () => {
    return {
        type: 'SHOW_DETAILS'
    }
}

export const movieDetailAction = (detail) => {
    return {
        type: 'MOVIE_DETAIL',
        payload: detail
    }
}

export const moviesInfoAction = (info) => {
    return {
        type: 'MOVIES_INFO',
        payload: info
    }
}
