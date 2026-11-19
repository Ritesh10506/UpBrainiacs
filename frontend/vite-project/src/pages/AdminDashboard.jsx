import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";
import UniversitiesPanel from "../components/admin/UniversitiesPanel";
import CrudPanel from "../components/admin/CrudPanel";
import "./AdminDashboard.css";

const TABS = [
  { id: "universities", label: "Universities" },
  { id: "students", label: "Students" },
  { id: "services", label: "Services" },
  { id: "appointments", label: "Appointments" },
];

const AdminDashboard = () => {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("universities");

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>UpBrainiacs</h2>
          <span>Admin Panel</span>
        </div>

        <nav className="admin-nav">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "admin-nav-btn active" : "admin-nav-btn"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <p>{admin?.email}</p>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">
        {activeTab === "universities" && <UniversitiesPanel />}
        {activeTab === "students" && (
          <CrudPanel
            title="Students"
            endpoint="students"
            canEdit={false}
            statusColumn
            fields={[]}
            columns={[
              { key: "first_name", label: "First name" },
              { key: "last_name", label: "Last name" },
              { key: "email", label: "Email" },
              { key: "mobile", label: "Mobile" },
              { key: "degree_pref", label: "Degree" },
              { key: "country_pref", label: "Country" },
              { key: "expected_neet_score", label: "NEET" },
              { key: "status", label: "Status" },
            ]}
          />
        )}
        {activeTab === "services" && (
          <CrudPanel
            title="Services"
            endpoint="services"
            fields={[
              { name: "name", label: "Service name", required: true },
              { name: "description", label: "Description" },
            ]}
            columns={[
              { key: "name", label: "Name" },
              { key: "description", label: "Description" },
            ]}
          />
        )}
        {activeTab === "appointments" && (
          <CrudPanel
            title="Appointments"
            endpoint="appointments"
            fields={[
              { name: "student_id", label: "Student ID", type: "number", required: true },
              { name: "date", label: "Date & time", type: "datetime-local", required: true },
              { name: "notes", label: "Notes" },
            ]}
            columns={[
              { key: "student_id", label: "Student ID" },
              { key: "date", label: "Date" },
              { key: "notes", label: "Notes" },
            ]}
          />
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;