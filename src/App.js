import { Home } from "./components/home";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/rokkitt";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Home></Home>
      </ChakraProvider>
    </div>
  );
}

export default App;
