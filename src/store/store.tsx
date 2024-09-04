import { configureStore } from '@reduxjs/toolkit';
import storeApi from '@/store/storeApi';
export const store = configureStore({
  reducer: {
    storeApp: storeApi,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
