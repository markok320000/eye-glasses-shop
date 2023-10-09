"use client";
import { Dialog, Disclosure, Transition } from "@headlessui/react";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import DefaultAccordion from "../accordion/DefaultAccordion";
import navbarData from "../bootstrapData/navbarData";

interface RightSideBarProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const RightSideBar: React.FC<RightSideBarProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/700
          
      "
      >
        {/* Dark gray background overlay */}
        <div
          className={`fixed inset-0 bg-gray-800 opacity-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleClose} // Close the sidebar when clicking the overlay
        ></div>

        <div
          className={`translate duration-300 h-full 
            ${showModal ? "translate-x-0" : "translate-x-full"} 
            ${showModal ? "opacity-100" : "opacity-0"} 
            float-right
                w-80
              bg-gray-300
              
           `}
        >
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full 
                   ${showModal ? "translate-x-0" : "translate-x-full"} 
                   ${showModal ? "opacity-100" : "opacity-0"} 
                  `}
          >
            <div
              className="
                  translate
                  h-full
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex
                  flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none
              "
            >
              {/* HEADER */}
              <div className="grid grid-cols-3 m-3 items-center text-center font-bold">
                <button
                  onClick={handleClose}
                  className="
                    border-0
                    hover:opacity-70
                    transition
                    h-9
                    w-9
                  "
                >
                  <IoMdClose size={27} />
                </button>
                <div className="items-center justify-center ">{title}</div>
              </div>
              <hr />

              {/* BODY */}
              <div
                className="relative  flex-auto overflow-y-auto "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {body}
              </div>
              {/* FOOTER */}
              <div className="flex flex-row bg-blue-gray-50">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
