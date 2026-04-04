import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/black-rock-logo.png";

function AccountPage()
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
                className="sidebar-nav-item"
                onClick={() => navigate("/reservations")}
              >
                Reservations
              </button>
              <button
                className="sidebar-nav-item active"
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
              <h2>Account</h2>
              <p>Manage your profile, preferences, and account details.</p>
            </div>
          </section>

          <section className="account-layout">
            <article className="dashboard-card account-main">
              <div className="account-section">
                <p className="vehicle-details-label">Profile</p>
                <div className="account-profile-row">
                  <div className="account-avatar">MD</div>

                  <div>
                    <h3 className="account-name">Mock Dude</h3>
                    <p className="account-email">mock.dude@email.com</p>
                  </div>
                </div>
              </div>

              <div className="account-section">
                <p className="vehicle-details-label">Personal Information</p>
                <div className="trip-details-grid">
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Phone</span>
                    <strong>(407) 555-0198</strong>
                  </div>
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Location</span>
                    <strong>Orlando, FL</strong>
                  </div>
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Member Since</span>
                    <strong>August 2025</strong>
                  </div>
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Membership Tier</span>
                    <strong>Premium</strong>
                  </div>
                </div>
              </div>

              <div className="account-section">
                <p className="vehicle-details-label">Preferences</p>
                <div className="trip-details-grid">
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Preferred Vehicle Type</span>
                    <strong>Luxury / Performance</strong>
                  </div>
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Preferred Pickup</span>
                    <strong>Orlando, FL</strong>
                  </div>
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Notifications</span>
                    <strong>Email + SMS</strong>
                  </div>
                  <div className="trip-detail-box">
                    <span className="trip-detail-box-label">Payment Method</span>
                    <strong>Visa ending in 2048</strong>
                  </div>
                </div>
              </div>
            </article>

            <aside className="dashboard-card account-side">
              <div className="account-side-section">
                <p className="vehicle-details-label">Account Status</p>
                <h4>Active</h4>
                <p>
                  Your account is in good standing and ready for future bookings.
                </p>
              </div>

              <div className="account-side-section">
                <p className="vehicle-details-label">Backend:</p>
                <p>
                  This entire page is front-end only. Backend needs to connect:
                </p>
                <ul className="vehicle-details-list">
                  <li>Authenticated user profile data</li>
                  <li>Potential Saved payment methods</li>
                  <li>User preferences</li>
                  <li>Membership/account settings</li>
                </ul>
              </div>

              <button className="btn btn-primary dashboard-btn-sm">
                Edit Profile
              </button>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AccountPage;