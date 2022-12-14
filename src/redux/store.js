import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { username: "" },
  reducers: {
    setUserData(state, actions) {
      return (state = actions.payload);
    },
  },
});

const userColor = createSlice({
  name: "userColor",
  initialState: { colors: "" },
  reducers: {
    setUserColor(state, actions) {
      return (state = actions.payload);
    },
  },
});

const room = createSlice({
  name: "room",
  initialState: {
    roomName: "",
    roomInfo: "",
    roomMember: "",
    roomLanguage: "",
    roomHidden: false,
  },
  reducers: {
    setRoomData(state, actions) {
      return (state = actions.payload);
    },
  },
});

export const { setUserData } = user.actions;
export const { setRoomData } = room.actions;
export const { setUserColor } = userColor.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    room: room.reducer,
    color: userColor.reducer,
  },
});
