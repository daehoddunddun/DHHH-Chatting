import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Index from "./pages/Index";
import CreateRoom from "./pages/chat/create/CreateRoom";
import RoomContens from "./pages/chat/room/RoomContens";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/create" element={<CreateRoom />} />
        <Route path="/room" element={<RoomContens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
