import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter(); // move you to another page = useNavigate in react
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const checkLogin = () => {
    const data = { email: Email, password: Password };

    axios
      .post("http://localhost:5000/users/checkLogin", data)
      .then((response) => {
        if (!response.data) {
          alert("Wrong Information, Failed, error");
          return;
        } else {
          const userData = response.data.split(".")[1];
          localStorage.setItem("Token", userData);
          router.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={() => checkLogin()}>
            Login
          </button>
          <Link href="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
