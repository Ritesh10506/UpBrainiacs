import RegisterForm from "../components/RegisterForm";
import StudentList from "../components/StudentList";

export default function Register() {
  return (
    <div>
      <h2>Register Students</h2>
      <RegisterForm />
      <StudentList />
    </div>
  );
}
