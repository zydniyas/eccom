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

function SignupModal({
  modals,
  closeModal,
  isOpen,
  onOpenChange,
  showToast,
  setShowToast,
}) {
  return (
    <>
      <Modal
        isOpen={modals.signUpModal}
        onOpenChange={() => closeModal("signUpModal")}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
              <form>
                <ModalBody>
                  <Input
                    autoComplete="firstName"
                    style={{ border: "none" }}
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="firstName"
                    placeholder="Enter your firstName"
                    variant="bordered"
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
                    onPress={() => closeModal("signUpModal")}
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
          message={`Account Created Please Log In.`}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default SignupModal;
