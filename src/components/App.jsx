import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layaut";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/contacts" element={<ContactsPage/>} />
          </Routes>
        </Suspense>
      </Layout>
</React.Fragment>
  );
}

