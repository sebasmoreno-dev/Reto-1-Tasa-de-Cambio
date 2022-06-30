import { Route, Routes } from "react-router-dom";

import { NavBar } from "../components/NavBar.jsx";
import { Personal } from "./../pages/Personal.jsx"
import { Business } from "./../pages/Business.jsx"
import { SendMoney } from "../pages/SendMoney.jsx";
import { Tools } from "../pages/Tools.jsx";
import { Resources } from "../pages/Resources.jsx";
import { SignIn } from "../pages/SignIn.jsx";
import { GetTheApp } from "../pages/GetTheApp.jsx";
import { Home } from "../pages/Home.jsx";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container mt-1">
        <Routes>
          <Route path="personal" element={<Personal />} />
          <Route path="business" element={<Business />} />


          <Route path="sendMoney" element={<SendMoney />} />
          <Route path="tools" element={<Tools />} />
          <Route path="resources" element={<Resources />} />

          <Route path="signIn" element={<SignIn />} />
          <Route path="getTheApp" element={<GetTheApp />} />



          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </>
  );
};
