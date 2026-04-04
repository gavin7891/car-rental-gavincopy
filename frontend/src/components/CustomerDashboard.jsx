import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/black-rock-logo.png";

const demoTrips = [
  {
    _id: "reservation-1",
    vehicleName: "2023 Ford Mustang GT",
    totalPrice: 400,
    dateRange: "June 24 - June 27, 2026",
    status: "Upcoming",
    imageClass: "trip-image",
    canCancel: true,
  },
  {
    _id: "demo-trip-2",
    vehicleName: "2022 Honda CRV Hybrid",
    totalPrice: 205,
    dateRange: "March 12 - March 15, 2026",
    status: "Completed",
    imageClass: "trip-image trip-image-2",
    canCancel: false,
  },
];

function CustomerDashboard()
{
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  /*
  TEMPORARY UI PREVIEW DATA:
  If no real bookings are returned yet, Demo Trips will show on
  user dashboard for a better look.

  BACKEND NOTE:
  Once real booking data is consistently available, this fallback can be
  removed or replaced with proper data from the API.
*/
  const displayTrips = bookings.length > 0 ? bookings : demoTrips;
  const hasRealBookings = bookings.length > 0;

  useEffect(() => {
    const fetchMyBookings = async () =>
      {
      try
      {
        /*
          TEMP. NOTE BACKEND
          Replace with authenticated request.
        */
        const response = await fetch("http://localhost:5000/api/bookings/my-bookings");
        const data = await response.json();
        setBookings(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setBookings([]);
      }
    };

    fetchMyBookings();
  }, []);

  const handleCancelBooking = async (bookingId) =>
    {
    try
    {
      /*
        TEMP. NOTE BACKEND
        Replace with authenticated cancellation.
      */
      await fetch(`http://localhost:5000/api/bookings/${bookingId}`,
      {
        method: "DELETE",
      });

      setBookings(bookings.filter((b) => b._id !== bookingId));
      alert("Booking cancelled.");
    }
    catch (err)
    {
      console.error(err);
    }
  };

  const hasBookings = bookings.length > 0;

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
                className="sidebar-nav-item active"
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
          <section className="dashboard-card dashboard-topbar">
            <div className="dashboard-topbar-copy">
              <h2>Good to see you.</h2>
              <p>Here’s what’s happening with your rentals.</p>
            </div>

            <div className="dashboard-topbar-actions">
              <button
                className="btn btn-primary dashboard-btn-sm"
                onClick={() => navigate("/vehicles")}
              >
                Browse Vehicles
              </button>
            </div>
          </section>

          <div className="dashboard-stack">
            <section className="summary-grid">
              <article className="dashboard-card summary-card">
                <div className="summary-card-top">
                  <div className="summary-icon">📅</div>
                  <p className="summary-card-label">Upcoming Trips</p>
                </div>
                <p className="summary-card-value">{displayTrips.length}</p>
                <p className="summary-card-meta">Next: June 24, 2026</p>
              </article>

              <article className="dashboard-card summary-card">
                <div className="summary-card-top">
                  <div className="summary-icon">🚗</div>
                  <p className="summary-card-label">Total Trips</p>
                </div>
                <p className="summary-card-value">5</p>
                <p className="summary-card-meta">All Time</p>
              </article>

              <article className="dashboard-card summary-card">
                <div className="summary-card-top">
                  <div className="summary-icon">⭐</div>
                  <p className="summary-card-label">Member Since</p>
                </div>
                <p className="summary-card-value">Aug 2025</p>
                <p className="summary-card-meta">Thank you for being with us!</p>
              </article>
            </section>

            <section className="dashboard-card trips-panel">
              <div className="trips-panel-header">
                <div className="trips-panel-copy">
                  <h3>My Trips</h3>
                </div>

                <button
                  className="btn btn-secondary dashboard-btn-sm"
                  onClick={() => navigate("/trips")}
                >
                  View All
                </button>
              </div>

              <div className="trips-list">
  {displayTrips.map((trip, index) => (
    <article className="trip-card" key={trip._id}>
      <div className={trip.imageClass}></div>

      <div className="trip-info">
        <div className="trip-title-row">
          <h4 className="trip-title">
            {hasRealBookings ? "Reserved Vehicle" : trip.vehicleName}
          </h4>

          <span
            className={`trip-status ${
              trip.status === "Upcoming" ? "upcoming" : "completed"
            }`}
          >
            {trip.status}
          </span>
        </div>

        <div className="trip-meta">
          <div className="trip-meta-row">
            <span className="trip-meta-dot"></span>
            <span>
              {hasRealBookings
                ? "Trip dates coming from backend"
                : trip.dateRange}
            </span>
          </div>

          <div className="trip-meta-row">
            <span className="trip-meta-dot"></span>
            <span>Total: ${trip.totalPrice}</span>
          </div>
        </div>
      </div>

      <div className="trip-actions">
        <button
          className="btn dashboard-btn-sm trip-btn-outline"
          onClick={() => navigate(`/trip-details/${trip._id}`)}
        >
          View Details
        </button>

        {(hasRealBookings || trip.canCancel) && (
          <button
            className="btn dashboard-btn-sm trip-btn-danger"
            onClick={() =>
            {
              if (hasRealBookings)
              {
                handleCancelBooking(trip._id);
              }
            }}
          >
            Cancel Trip
          </button>
        )}
      </div>
    </article>
  ))}
</div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CustomerDashboard;