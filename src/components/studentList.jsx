import { useEffect, useState } from "react";
import { getStudents } from "../api";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      <h2>Registered Students</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name} - {s.expected_neet_score}</li>
        ))}
      </ul>
    </div>
  );
}
