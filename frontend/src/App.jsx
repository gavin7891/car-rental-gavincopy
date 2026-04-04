import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CustomerDashboard from "./components/CustomerDashboard";
import MyTripsPage from "./components/MyTripsPage";
import BrowseVehiclesPage from "./components/BrowseVehiclesPage";
import VehicleDetailsPage from "./components/VehicleDetailsPage";
import ReservationPage from "./components/ReservationPage";
import ReservationsOverviewPage from "./components/ReservationsOverviewPage";
import TripDetailsPage from "./components/TripDetailsPage";
import AccountPage from "./components/AccountPage";

function App()
{
  return (
    <Router basename="/car-rental">
      {
        /* 
          TEMP. ROUTING SETUP
          I disabled route protection for front-end UI Dev.
          Whoever's doing backend / authentication integration
          can add protected routes and redirect logic back here.
        */
      }
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browse" element={<CustomerDashboard />} />
        <Route path="/trips" element={<MyTripsPage />} />
        <Route path="/vehicles" element={<BrowseVehiclesPage />} />
        <Route path="/vehicles/:vehicleId" element={<VehicleDetailsPage />} />
        <Route path="/reservations/:vehicleId" element={<ReservationPage />} />
        <Route path="/reservations" element={<ReservationsOverviewPage />} />
        <Route path="/trip-details/:tripId" element={<TripDetailsPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;