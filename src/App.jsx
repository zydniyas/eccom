import { useDisclosure } from "@nextui-org/react";
import Nav from "./component/common/Nav";
import LogInModal from "./component/modals/LogInModal";
import React, { useEffect, useState } from "react";
import Hero from "./component/Hero";
import axios from "axios";
import SignupModal from "./component/modals/SignupModal";

function App() {
  const [modals, setModals] = useState({
    loginModal: false,
    signUpModal: false,
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDark, setIsDark] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [userDetails, setUserDetails] = useState([
    { userName: "", imageUrl: "" },
  ]);

  // Function to open a modal
  const openModal = (modalName) => {
    setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
  };

  // Function to close a modal
  const closeModal = (modalName) => {
    setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
  };

  const loginUser = (username, password) => {
    return axios
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Login failed:", error);
        throw error;
      });
  };

  const handleSignup = () => {};

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(username, password)
      .then((data) => {
        setUserDetails({ userName: data.username, imageUrl: data.image });
        setShowToast(true);
        onOpenChange(false);
      })
      .catch((error) => {
        // Handle login failure (e.g., show an error message)
      });
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <Nav
        modals={modals}
        openModal={openModal}
        userDetails={userDetails}
        onOpen={onOpen}
      />
      <Hero />
      <LogInModal
        openModal={openModal}
        closeModal={closeModal}
        modals={modals}
        onOpen={onOpen}
        userDetails={userDetails}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
        username={username}
        handleLogin={handleLogin}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <SignupModal
        closeModal={closeModal}
        modals={modals}
        showToast={showToast}
        setShowToast={setShowToast}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default App;
