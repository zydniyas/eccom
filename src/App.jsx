import { useDisclosure } from "@nextui-org/react";
import Nav from "./component/common/Nav";
import LogInModal from "./component/modals/LogInModal";
import React, { useEffect } from "react";
import Hero from "./component/Hero";
import axios from "axios";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Nav onOpen={onOpen} />
      <Hero />
      <LogInModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default App;
