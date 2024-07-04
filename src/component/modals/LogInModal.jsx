import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "../icons/MailIcon";
import { LockIcon } from "../icons/LockIcon";
import { useState } from "react";
import axios from "axios";
import ToastMessage from "../toast/ToastMessage";

function LogInModal({ isOpen, onOpenChange }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [userDetails, setUserDetails] = useState([
    { userName: "", imageUrl: "" },
  ]);

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
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <form onSubmit={handleLogin}>
                <ModalBody>
                  <Input
                    autoComplete="username"
                    style={{ border: "none" }}
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Username"
                    placeholder="Enter your username"
                    variant="bordered"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    autoComplete="current-password"
                    style={{ border: "none" }}
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Sign in
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      {showToast && (
        <ToastMessage
          message={`Hi ${userDetails.userName}, thanks for Log In.`}
          userName={userDetails.userName}
          userImage={userDetails.imageUrl}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default LogInModal;
