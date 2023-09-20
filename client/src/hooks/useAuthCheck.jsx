// ! check if users is authenticated then they can process further for booking residencies etc.
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { toast } from "react-toastify";

const useAuthCheck = () => {
  const { isAuthenticated } = useAuth0();
  const validateLogin = () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in", { position: "bottom-right" });
      return false;
    } else {
      return true;
    }
  };

  return {
    validateLogin,
  };
};

export default useAuthCheck;
