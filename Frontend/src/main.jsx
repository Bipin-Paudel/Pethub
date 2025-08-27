import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import routes from "./Components/Routes/Routes.jsx";
import LoginPage from "./Components/Auth/Login.jsx";
import SignupPage from "./Components/Auth/SignUp.jsx";
import Rehome from "./Components/Features/Rehome.jsx";
import LivestockPage from "./Components/Livestock/Livestock.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import HomeScreen from "./Components/Home/Home.jsx";
import Layout from "./Layout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.jsx"; // <-- important
import Adoption from "./Components/Features/Adoption.jsx";
import AdoptionForm from "./Components/Features/AdoptionForm.jsx";
import RescueForm from "./Components/Features/Rescue.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.layout} element={<Layout />}>
      <Route index element={<HomeScreen />} />
      <Route path={routes.rehome} element={<Rehome />} />
      <Route path={routes.adoption} element={<Adoption />} />
      <Route path={routes.rescue} element={<RescueForm />} />
      <Route path={routes.adoptionform} element={<AdoptionForm />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.signup} element={<SignupPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
