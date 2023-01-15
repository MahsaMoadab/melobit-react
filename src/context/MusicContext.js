import React from "react";

var MusicStateContext = React.createContext();
var MusicDispatchContext = React.createContext();

const typeMusicId = "SET_MUSIC_ID";

function musicReducer(state, action) {
  switch (action.type) {
    case typeMusicId:
      return { ...state, musicId: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function MusicProvider({ children }) {
  var [state, dispatch] = React.useReducer(musicReducer, {
    musicId: "",
  });
  return (
    <MusicStateContext.Provider value={state}>
      <MusicDispatchContext.Provider value={dispatch}>
        {children}
      </MusicDispatchContext.Provider>
    </MusicStateContext.Provider>
  );
}

function useMusicState() {
  var context = React.useContext(MusicStateContext);
  if (context === undefined) {
    throw new Error("useMusicState must be used within a MusicProvider");
  }
  return context;
}

function useMusicDispatch() {
  var context = React.useContext(MusicDispatchContext);
  if (context === undefined) {
    throw new Error("useMusicDispatch must be used within a MusicProvider");
  }
  return context;
}

export { MusicProvider, useMusicState, useMusicDispatch, setPlayMusic };

function setPlayMusic(dispatch, id) {
  dispatch({
    type: typeMusicId,
    payload: id,
  });
}

