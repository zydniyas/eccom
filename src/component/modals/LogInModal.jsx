/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

function LogInModal({
  openModal,
  closeModal,
  modals,
  onOpen,
  isOpen,
  onOpenChange,
  handleLogin,
  username,
  setUsername,
  setPassword,
  password,
  showToast,
  setShowToast,
  userDetails,
}) {
  return (
    <>
      <Modal
        isOpen={modals.loginModal}
        onOpenChange={() => closeModal("loginModal")}
        placement="top-center"
      >
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
                  <div className="flex py-2 px-1 justify-between items-start">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      <span className="whitespace-nowrap">Remember me</span>
                    </Checkbox>
                    <div className="text-right">
                      <Link
                        onPress={() => openModal("signUpModal")}
                        className="text-right"
                        color="primary"
                        href="#"
                        size="sm"
                      >
                        New Customer? Create an account
                      </Link>
                      <Link
                        className="text-right"
                        color="primary"
                        href="#"
                        size="sm"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={() => closeModal("loginModal")}
                  >
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
