"use client";
import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Container from "@/components/container";
import { useSelector } from "react-redux";

function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkMode = useSelector((state: any) => state?.settingSlice);
  useEffect(() => {
    if (darkMode.dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;
