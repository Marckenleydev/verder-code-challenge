import { createSlice, configureStore } from '@reduxjs/toolkit';


// const users = UserPost(1)
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postCount: 0
  },
  reducers: {
    addPost:(state, action)=> {
      state.posts.push(action.payload);
      state.postCount++;
    },
    deletePost:(state, action)=> {
      state.posts = state.posts.filter(post => post.id !== action.payload);
      state.postCount--;
    }
  }
});

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer
  }
});

export const { addPost, deletePost } = postsSlice.actions;
export default store;