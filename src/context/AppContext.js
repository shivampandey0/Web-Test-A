import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();
const useApp = () => useContext(AppContext);

const initialState = {
  position: 'Floating',
  visibility: 'visible',
  from: ''
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'POSITION':
      return {
        ...state,
        position: action.payload
      };

    case 'VISIBILITY':
      return {
        ...state,
        visibility: action.payload
      };

    case 'FROM':
      return {
        ...state,
        from: action.payload
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
