const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

export async function getStudents() {
  const response = await fetch(
    `${API_URL}/students`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch students"
    );
  }

  return response.json();
}

export async function addStudent(student) {
  const response = await fetch(
    `${API_URL}/students`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(student),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to add student"
    );
  }

  return response.json();
}