import { Box, Stack } from "@mui/material";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Box>
        <Navbar/>
      <Stack direction='row' spacing={2} justifyContent="space-between">
        <Sidebar/>
        <About/>
        <Rightbar/>
      </Stack>
    </Box>
    
  );
}

export default App;
