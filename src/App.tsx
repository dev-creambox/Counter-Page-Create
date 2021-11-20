import React from 'react';
import CounterPage from "./ui/pages/CounterPage";
import {Stack} from "@mui/material";


function App() {
  return (
    <Stack height={"100%"}>
        <CounterPage/>
        {/*<TodoListPage/>*/}
    </Stack>
  );
}

export default App;
