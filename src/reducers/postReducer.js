import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
    posts: [],
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                posts: [...state.posts]
            }
        case NEW_POST:
            return {
                posts: [...state.posts, action.payload]
            }

        default: return state
    }
}