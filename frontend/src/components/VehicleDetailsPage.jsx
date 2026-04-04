import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/black-rock-logo.png";
import vehicles from "../data/vehiclesData";

function VehicleDetailsPage()
{
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  const vehicle = vehicles.find((v) => v.id === vehicleId);

  if (!vehicle)
    {
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
                  className="sidebar-nav-item active"
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
            <section className="dashboard-card trips-panel">
              <div className="empty-state">
                <h3>Vehicle not found.</h3>
                <p>
                  The selected vehicle could not be located. Return to the fleet
                  page to browse available rentals.
                </p>
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
                className="sidebar-nav-item active"
                onClick={() => navigate("/vehicles")}
              >
                Browse Vehicles
              </button>
              <button className="sidebar-nav-item">Reservations</button>
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
              <h2>{vehicle.name}</h2>
              <p>{vehicle.type}</p>
            </div>

            <div className="dashboard-topbar-actions">
              <button
                className="btn btn-secondary dashboard-btn-sm"
                onClick={() => navigate("/vehicles")}
              >
                Back to Vehicles
              </button>
              
            </div>
          </section>

          <section className="vehicle-details-layout">
            <article className="dashboard-card vehicle-details-main">
              <div className={`vehicle-details-image ${vehicle.imageClass}`}></div>

              <div className="vehicle-details-content">
                <div className="vehicle-details-price-row">
                  <div>
                    <p className="vehicle-details-label">Daily Rate</p>
                    <h3 className="vehicle-details-price">${vehicle.price}/day</h3>
                  </div>

                  <span className="vehicle-details-type-badge">{vehicle.type}</span>
                </div>

                <div className="vehicle-details-section">
                  <h4>Vehicle Overview</h4>
                  <p>{vehicle.description}</p>
                </div>

                <div className="vehicle-details-section">
                  <h4>Key Features</h4>
                  <div className="vehicle-features">
                    {vehicle.features.map((feature, index) => (
                      <span className="vehicle-feature-tag" key={index}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <aside className="dashboard-card vehicle-details-side">
              <div className="vehicle-details-side-section">
                <p className="vehicle-details-label">Availability</p>
                <h4>Ready to Reserve</h4>
                <p>
                  This would be where backend places calendar
                  and all associated information for booking rental.
                </p>
              </div>

              <div className="vehicle-details-side-section">
                <p className="vehicle-details-label">Rental Notes</p>
                <ul className="vehicle-details-list">
                  <li>Rental is available</li>
                  <li>Flexible trip options</li>
                  <li>Book Today!</li>
                </ul>
              </div>

              <button
                className="btn btn-primary dashboard-btn-sm"
                onClick={() => navigate(`/reservations/${vehicle.id}`)}
              >
                Reserve This Vehicle
              </button>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default VehicleDetailsPage;