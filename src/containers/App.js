import React from "react";
import Header from "../components/Header/Header";
import Profile from "./Profile";
import styled, { createGlobalStyle } from "styled-components";

// babel proposal decorators error is because of svg logo

const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <Globalstyle />
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
    </>
  );
}

export default App;
