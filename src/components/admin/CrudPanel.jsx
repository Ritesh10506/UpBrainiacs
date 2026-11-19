import { useState, useEffect } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import "./AdminPanels.css";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
const STATUSES = ["New", "Contacted", "Applied", "Admitted", "Rejected"];

// One generic admin table: list + (optional) add/edit + delete (+ optional status dropdown).
// ponytail: no pagination/search; add if lists grow large.
const CrudPanel = ({ title, endpoint, fields, columns, canEdit = true, statusColumn = false }) => {
  const { token } = useAdminAuth();
  const auth = { Authorization: `Bearer ${token}` };
  const empty = Object.fromEntries(fields.map((f) => [f.name, ""]));

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${endpoint}/`, { headers: auth });
      if (!res.ok) throw new Error(`Failed to load ${title.toLowerCase()}`);
      setRows(await res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  const reset = () => {
    setForm(empty);
    setEditingId(null);
    setShowForm(false);
  };

  const call = async (url, method, body) => {
    const res = await fetch(`${API_URL}/${url}`, {
      method,
      headers: { "Content-Type": "application/json", ...auth },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(typeof err.detail === "string" ? err.detail : "Request failed");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const body = { ...form };
      fields.forEach((f) => {
        if (f.type === "number") body[f.name] = Number(body[f.name]);
      });
      await call(editingId ? `${endpoint}/${editingId}` : `${endpoint}/`, editingId ? "PUT" : "POST", body);
      await load();
      reset();
    } catch (err) {
      setError(err.message);
    }
  };

  const edit = (row) => {
    setForm(
      Object.fromEntries(
        fields.map((f) => {
          const v = row[f.name] ?? "";
          return [f.name, f.type === "datetime-local" ? String(v).slice(0, 16) : v];
        })
      )
    );
    setEditingId(row.id);
    setShowForm(true);
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this record?")) return;
    setError("");
    try {
      await call(`${endpoint}/${id}`, "DELETE");
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const changeStatus = async (id, status) => {
    setError("");
    try {
      await call(`${endpoint}/${id}/status`, "PATCH", { status });
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const cell = (row, c) => {
    if (c.key === "date" && row.date) return new Date(row.date).toLocaleString();
    return row[c.key] ?? "";
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h1>{title}</h1>
        {canEdit && (
          <button className="admin-add-btn" onClick={() => { reset(); setShowForm(true); }}>
            + Add
          </button>
        )}
      </div>

      {error && <div className="admin-panel-error">{error}</div>}

      {showForm && (
        <form onSubmit={submit} className="admin-form">
          <div className="admin-form-grid">
            {fields.map((f) => (
              <input
                key={f.name}
                name={f.name}
                type={f.type || "text"}
                placeholder={f.label}
                title={f.label}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                required={f.required}
              />
            ))}
          </div>
          <div className="admin-form-actions">
            <button type="submit">{editingId ? "Update" : "Create"}</button>
            <button type="button" onClick={reset} className="admin-cancel-btn">Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((c) => <th key={c.key}>{c.label}</th>)}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {columns.map((c) => (
                  <td key={c.key}>
                    {statusColumn && c.key === "status" ? (
                      <select value={row.status} onChange={(e) => changeStatus(row.id, e.target.value)}>
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    ) : (
                      cell(row, c)
                    )}
                  </td>
                ))}
                <td className="admin-table-actions">
                  {canEdit && <button onClick={() => edit(row)}>Edit</button>}
                  <button onClick={() => remove(row.id)} className="admin-delete-btn">Delete</button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} style={{ textAlign: "center", color: "#888" }}>
                  No records yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CrudPanel;