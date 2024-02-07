import Alert from "./commons/Alert";
import { LoginForm } from "./commons/LoginForm";

const LoginPage = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <LoginForm />
      <Alert />
    </main>
  );
};

export default LoginPage;
