import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import AddContact from "./components/Contacts/AddContact/AddContact.jsx";
import ContactList from "./components/Contacts/ContactList/ContactList.jsx";
import ViewContact from "./components/Contacts/ViewContact/ViewContact.jsx";
import EditContact from "./components/Contacts/EditContact/EditContact.jsx";
let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/list/add"} element={<AddContact />} />
        <Route path={"/contacts/view/:contactID"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactID"} element={<EditContact />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
