import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const hundleNameChange = (e) => {
    setName(e.target.value);
  };
  const hundleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const hundlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const hundleRegister = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      let user = {
        name: name,
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:5000/users/add", user)
        .then((res) => {
          console.log(res.data);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div>
        <div>
          <h1>Sign up</h1>
          <input onChange={hundleNameChange} type="text" name="Name" placeholder="Name" />
          <input onChange={hundleEmailChange} type="text" name="Email" placeholder="Email" />
          <input onChange={hundlePasswordChange} type="password" name="password" placeholder="Password" />
          <input onChange={handlePasswordConfirm}
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button onClick={hundleRegister} type="submit">Create Account</button>
          <Link href="/">Do you have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default signup;
