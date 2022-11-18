import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoBackground from "./components/TodoBackground";
import TodoTitle from "./components/TodoTitle";


const GlobalStyle = createGlobalStyle`
  body {
  background: #fff7b0;
  }
 `;

function App() {
  return (
      <>
        <GlobalStyle />
          <TodoBackground />
          <TodoTitle />
        <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
      </>
  );
}

export default App;
