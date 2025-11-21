"use client";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion } from "framer-motion";

const icons = {
  information: "fi fi-rr-exclamation",
  success: "fi fi-rr-check-circle",
  error: "fi fi-rr-cross-circle",
};

const colors = {
  information: "#E59623",
  success: "#9EE11E",
  error: "#E10500",
};

const ToastComponent = ({ timeout = 2000 }, ref) => {
  const [isShown, setIsShown] = useState(false);

  const [toastInfo, setToastInfo] = useState({
    message: "",
    type: "",
    customFavicon: "",
  });

  useImperativeHandle(ref, () => ({
    showToast(message, type) {
      setToastInfo({
        message,
        type,
      });
      setIsShown(true);

      setTimeout(() => {
        setIsShown(false);
      }, timeout);
    },
  }));

  useEffect(() => {
    if (isShown) {
      const timer = setTimeout(() => {
        setIsShown(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isShown, timeout]);

  if (!isShown) return null;

  return (
    <div className="fixed z-[8000] w-full bottom-0 left-0 md:w-fit md:bottom-4 md:left-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, translateY: "100%" }}
        animate={
          isShown
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: "100%" }
        }
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{ border: `${colors[toastInfo.type]} 2px solid` }}
        onClick={() => setIsShown(false)}
        className={`bg-primary-orange border shadow-xl shadow-primary-orange/10 rounded-md overflow-hidden cursor-pointer`}
      >
        <div className="px-4 py-2 flex items-center gap-2">
          <motion.i
            initial={{ rotate: "-45deg" }}
            animate={isShown ? { rotate: 0 } : { rotate: "-45deg" }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: [0.6, -0.28, 0.735, 0.045],
            }}
            className={`${
              toastInfo.customFavicon
                ? toastInfo.customFavicon
                : icons[toastInfo.type]
            } w-12 h-12  bg-white aspect-square rounded-full grid place-items-center  text-2xl`}
          />

          <span className="font-semibold text-white w-[20rem]">
            {toastInfo.message}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default forwardRef(ToastComponent);
