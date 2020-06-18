import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

// Global CSS import
import "./App.css";

// Components imports
import CountryList from "./components/CountryList";
import ActionList from "./components/ActionList";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
