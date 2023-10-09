"use client";
import useSideBarMenuModal from "@/app/hooks/useSideBarMenuModal";
import React from "react";
import SideBarMenuModal from "./SideBarMenuModal";

const SideBar = () => {
  const sideBarMenuModal = useSideBarMenuModal();
  return (
    <SideBarMenuModal
      isOpen={sideBarMenuModal.isOpen}
      onClose={sideBarMenuModal.onClose}
      onSubmit={() => {}}
    />
  );
};

export default SideBar;
