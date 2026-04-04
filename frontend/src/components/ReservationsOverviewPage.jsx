import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/black-rock-logo.png";

const currentReservations = [
  {
    id: "reservation-1",
    vehicleName: "2023 Ford Mustang GT",
    totalPrice: 400,
    dateRange: "June 24 - June 27, 2026",
    status: "Confirmed",
    imageClass: "trip-image",
    pickupLocation: "Orlando, FL",
  },
];

function ReservationsOverviewPage()
{
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-brand">
              <img
                src={logo}
                alt="Black Rock Solutions logo"
                className="sidebar-logo"
              />
              <div className="sidebar-brand-copy">
                <h1>Black Rock Solutions</h1>
              </div>
            </div>

            <nav className="sidebar-nav">
              <button
                className="sidebar-nav-item"
                onClick={() => navigate("/browse")}
              >
                Dashboard
              </button>
              <button
                className="sidebar-nav-item"
                onClick={() => navigate("/trips")}
              >
                My Trips
              </button>
              <button
                className="sidebar-nav-item"
                onClick={() => navigate("/vehicles")}
              >
                Browse Vehicles
              </button>
              <button
                className="sidebar-nav-item active"
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
          <section className="dashboard-card dashboard-topbar">
            <div className="dashboard-topbar-copy">
              <h2>Current Reservations</h2>
              <p>Manage your active and upcoming bookings.</p>
            </div>
          </section>

          <section className="dashboard-card trips-panel">
            <div className="trips-panel-header">
              <div className="trips-panel-copy">
                <h3>Active Bookings</h3>
                <p>Only current reservations that are still upcoming or active appear here.</p>
              </div>
            </div>

            <div className="trips-list">
              {currentReservations.map((reservation) => (
                <article className="trip-card" key={reservation.id}>
                  <div className={reservation.imageClass}></div>

                  <div className="trip-info">
                    <div className="trip-title-row">
                      <h4 className="trip-title">{reservation.vehicleName}</h4>
                      <span className="trip-status upcoming">
                        {reservation.status}
                      </span>
                    </div>

                    <div className="trip-meta">
                      <div className="trip-meta-row">
                        <span className="trip-meta-dot"></span>
                        <span>{reservation.dateRange}</span>
                      </div>

                      <div className="trip-meta-row">
                        <span className="trip-meta-dot"></span>
                        <span>Pickup: {reservation.pickupLocation}</span>
                      </div>

                      <div className="trip-meta-row">
                        <span className="trip-meta-dot"></span>
                        <span>Total: ${reservation.totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="trip-actions">
                    <button
                      className="btn dashboard-btn-sm trip-btn-outline"
                      onClick={() => navigate(`/trip-details/${reservation.id}`)}
                    >
                      View Details
                    </button>

                    <button className="btn dashboard-btn-sm trip-btn-danger">
                      Cancel Trip
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ReservationsOverviewPage;