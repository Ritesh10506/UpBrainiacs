const API_URL = "http://127.0.0.1:8000"; // FastAPI backend

export async function getStudents() {
  const res = await fetch(`${API_URL}/students`);
  return res.json();
}

export async function addStudent(student) {
  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
}
