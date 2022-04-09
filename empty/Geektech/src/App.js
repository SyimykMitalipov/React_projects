import React from "react";
import Header from "./components/header";
import MainPage from "./containers/MainPage";
import MuiTheme from "./theme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./states/state";
import { requester } from "./requester";
import thunk from "redux-thunk";
import Benefits from "./components/benefits";

const App = () => {
  const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument({ api: requester }))
  );
  return (
    <Provider store={store}>
      <MuiTheme>
        <Header />
        <Benefits />
        {/* <MainPage /> */}
      </MuiTheme>
    </Provider>
  );
};

export default App;
