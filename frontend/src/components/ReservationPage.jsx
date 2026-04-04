import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/black-rock-logo.png";
import vehicles from "../data/vehiclesData";

function ReservationPage()
{
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  const vehicle = vehicles.find((v) => v.id === vehicleId);

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Orlando, FL");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!vehicle)
    {
    return (
      <div className="dashboard-page">
        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <div className="sidebar-top">
              <div className="sidebar-brand">
                <img src={logo} alt="Black Rock Solutions logo" className="sidebar-logo" />
                <div className="sidebar-brand-copy">
                  <h1>Black Rock Solutions</h1>
                </div>
              </div>

              <nav className="sidebar-nav">
                <button className="sidebar-nav-item" onClick={() => navigate("/browse")}>
                  Dashboard
                </button>
                <button className="sidebar-nav-item" onClick={() => navigate("/trips")}>
                  My Trips
                </button>
                <button className="sidebar-nav-item" onClick={() => navigate("/vehicles")}>
                  Browse Vehicles
                </button>
                <button
                    className="sidebar-nav-item"
                    onClick={() => navigate("/reservations")}
                >
                    Reservations
                </button>
                <button
                    className="sidebar-nav-item"
                    onClick={() => navigate("/account")}
                >
                    Account
                </button>
              </nav>
            </div>

            <div className="sidebar-bottom">
              <button
                className="btn btn-secondary dashboard-btn-sm"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </div>
          </aside>

          <main className="dashboard-main">
            <section className="dashboard-card trips-panel">
              <div className="empty-state">
                <h3>Vehicle not found.</h3>
                <p>Select a valid vehicle before creating a reservation.</p>
                <div className="empty-state-actions">
                  <button
                    className="btn btn-primary dashboard-btn-sm"
                    onClick={() => navigate("/vehicles")}
                  >
                    Back to Vehicles
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }

  const estimatedTotal = vehicle.price * 3;

  const handleReservationSubmit = (e) =>
    {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!pickupDate || !returnDate || !pickupLocation.trim())
    {
      setError("Please complete all reservation fields.");
      return;
    }

    /*
      TEMP. FRONT END RESERVATION SYSTEM
      Submit handler only present for UI Dev.

      BACKEND NOTES:
      Replace this with:
      - API Request for Reservation Creation
      - Date Validation
      - Availability Check for Vehicles
      - Backend Pricing Calculations
      - User Authentication
      - Redirect So New Reservations Appear Everywhere Else.
    */

    setSuccess("Reservation submitted for UI preview.");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-brand">
              <img src={logo} alt="Black Rock Solutions logo" className="sidebar-logo" />
              <div className="sidebar-brand-copy">
                <h1>Black Rock Solutions</h1>
              </div>
            </div>

            <nav className="sidebar-nav">
              <button className="sidebar-nav-item" onClick={() => navigate("/browse")}>
                Dashboard
              </button>
              <button className="sidebar-nav-item" onClick={() => navigate("/trips")}>
                My Trips
              </button>
              <button className="sidebar-nav-item" onClick={() => navigate("/vehicles")}>
                Browse Vehicles
              </button>
              <button className="sidebar-nav-item active">Reservations</button>
              <button className="sidebar-nav-item">Account</button>
            </nav>
          </div>

          <div className="sidebar-bottom">
            <button
              className="btn btn-secondary dashboard-btn-sm"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="dashboard-main">
          <section className="dashboard-card dashboard-topbar">
            <div className="dashboard-topbar-copy">
              <h2>Reservation Details</h2>
              <p>Complete your booking information for this vehicle.</p>
            </div>

            <div className="dashboard-topbar-actions">
              <button
                className="btn btn-secondary dashboard-btn-sm"
                onClick={() => navigate(`/vehicles/${vehicle.id}`)}
              >
                Back to Vehicle
              </button>
            </div>
          </section>

          <section className="reservation-layout">
            <article className="dashboard-card reservation-main">
              <div className={`reservation-vehicle-image ${vehicle.imageClass}`}></div>

              <div className="reservation-main-content">
                <div className="reservation-vehicle-header">
                  <div>
                    <p className="vehicle-details-label">Selected Vehicle</p>
                    <h3 className="reservation-vehicle-title">{vehicle.name}</h3>
                    <p className="reservation-vehicle-type">{vehicle.type}</p>
                  </div>

                  <div className="reservation-price-box">
                    <span>${vehicle.price}</span>
                    <small>/day</small>
                  </div>
                </div>

                <div className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <span className="vehicle-feature-tag" key={index}>
                      {feature}
                    </span>
                  ))}
                </div>

                <form className="reservation-form" onSubmit={handleReservationSubmit}>
                  <div className="reservation-form-grid">
                    <div className="reservation-field">
                      <label className="label" htmlFor="pickupDate">
                        Pickup Date
                      </label>
                      <input
                        id="pickupDate"
                        type="date"
                        className="input-field"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                      />
                    </div>

                    <div className="reservation-field">
                      <label className="label" htmlFor="returnDate">
                        Return Date
                      </label>
                      <input
                        id="returnDate"
                        type="date"
                        className="input-field"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="reservation-field">
                    <label className="label" htmlFor="pickupLocation">
                      Pickup Location
                    </label>
                    <input
                      id="pickupLocation"
                      type="text"
                      className="input-field"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                    />
                  </div>

                  {error && <div className="reservation-message reservation-error">{error}</div>}
                  {success && (
                    <div className="reservation-message reservation-success">{success}</div>
                  )}

                  <div className="reservation-actions">
                    <button type="submit" className="btn btn-primary dashboard-btn-sm">
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              </div>
            </article>

            <aside className="dashboard-card reservation-side">
              <div className="reservation-summary-section">
                <p className="vehicle-details-label">Pricing Summary</p>
                <div className="reservation-summary-row">
                  <span>Vehicle Rate</span>
                  <strong>${vehicle.price}/day</strong>
                </div>
                <div className="reservation-summary-row">
                  <span>Estimated Duration</span>
                  <strong>3 days</strong>
                </div>
                <div className="reservation-summary-row reservation-summary-total">
                  <span>Estimated Total</span>
                  <strong>${estimatedTotal}</strong>
                </div>
              </div>

              <div className="reservation-summary-section">
                <p className="vehicle-details-label">Backend Handoff</p>
                <p className="reservation-note">
                  !!!Backend needs to connect real booking creation, pricing validation, 
                  vehicle availability, and reservation persistence here.!!!
                </p>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ReservationPage;