import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Register from "./pages/Register";
import TutorDashboard from "./pages/TutorDashboard";
import VetDashboard from "./pages/VetDashboard";
import ClinicDashboard from "./pages/ClinicDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tutor" element={<TutorDashboard />} />
        <Route path="/vet" element={<VetDashboard />} />
        <Route path="/clinic" element={<ClinicDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Layout>
  );
}
