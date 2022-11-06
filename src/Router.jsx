import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Index from "./pages/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
