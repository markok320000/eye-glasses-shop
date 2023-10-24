"use client";
import useSideBarMenuModal from "@/app/hooks/useSideBarMenuModal";
import { Dialog, Disclosure, Transition } from "@headlessui/react";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import DefaultAccordion from "../accordion/DefaultAccordion";
import navbarData from "../bootstrapData/navbarData";

interface SideBarMenuModalProps {
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

const SideBarMenuModal: React.FC<SideBarMenuModalProps> = ({
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
  const sideBarMenuModal = useSideBarMenuModal();
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
            ${showModal ? "-translate-x-0" : "-translate-x-full"} 
            ${showModal ? "opacity-100" : "opacity-0"} 
            fixed
                w-80
              bg-gray-300
              
           `}
        >
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full 
                   ${showModal ? "-translate-x-0" : "-translate-x-full"} 
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
              <div
                className="
                  flex
                  rounded-t
                  justify-between
                  border-b-[1px]
                 "
              >
                <button
                  onClick={handleClose}
                  className="
                    p-1
                    m-2
                    border-0
                    hover:opacity-70
                    transition
                  "
                >
                  <IoMdClose size={27} />
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleClose}
                    className="
                       bg-orange-300
                       text-white
                       hover:opacity-70
                       transition
                       rounded-md
                       p-2
                       m-2
                     "
                  >
                    Sign in
                  </button>
                  {/* Add other button(s) here */}
                </div>
              </div>

              {/* BODY */}
              <div className="relative  flex-auto">
                <DefaultAccordion apiData={navbarData} />
              </div>
              {/* FOOTER */}
              <div className="flex flex-row bg-blue-gray-50">
                <div
                  className="
                      flex
                      flex-row
                      items-center
                      w-full
                      h-8
                      text-xs
                      text-gray-600
                      underline
                      mx-3
                      gap-3
                      "
                >
                  <a href="">Contact</a>
                  <a href="">Order Tracking</a>
                </div>
                <div className="bg-red-300"></div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMenuModal;
