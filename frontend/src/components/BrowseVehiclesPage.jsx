import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import logo from "../assets/black-rock-logo.png";
import vehicles from "../data/vehiclesData";

function BrowseVehiclesPage()
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
          <section className="dashboard-card dashboard-topbar">
            <div className="dashboard-topbar-copy">
              <h2>Browse Vehicles</h2>
              <p>Explore available rentals and find the right vehicle for your next trip.</p>
            </div>

            <div className="dashboard-topbar-actions">
              
            </div>
          </section>

          <section className="dashboard-card trips-panel">
            <div className="trips-panel-header">
              <div className="trips-panel-copy">
                <h3>Available Fleet</h3>
                <p>Browse the current Black Rock Solutions rental selection.</p>
              </div>
            </div>

            <div className="vehicle-grid">
              {vehicles.map((vehicle) => (
                <article className="vehicle-card" key={vehicle.id}>
                  <div className={vehicle.imageClass}></div>

                  <div className="vehicle-card-body">
                    <div className="vehicle-card-top">
                      <div>
                        <h4 className="vehicle-title">{vehicle.name}</h4>
                        <p className="vehicle-type">{vehicle.type}</p>
                      </div>

                      <div className="vehicle-price">
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

                    <div className="vehicle-card-actions">
                      <button
                        className="btn btn-secondary dashboard-btn-sm"
                        onClick={() => navigate(`/vehicles/${vehicle.id}`)}
                      >
                        View Details
                      </button>
                      <button
                        className="btn btn-primary dashboard-btn-sm"
                        onClick={() => navigate(`/reservations/${vehicle.id}`)}
                      >
                        Reserve Now
                      </button>
                    </div>
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

export default BrowseVehiclesPage;