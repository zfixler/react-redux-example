import { FETCH_POSTS, NEW_POST } from './types'

export function fetchPosts(){
    
    return function(dispatch){
        dispatch({
            type: FETCH_POSTS,
        })
    }
}

export function createPost(postData){
    return function(dispatch){
       dispatch({
            type: NEW_POST,
            payload: postData
        })
    }
}