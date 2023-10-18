import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/features/counter";
import filtersSlice from "@/app/redux/features/filters";
// ...

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
    counterReducer,
    filtersSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
