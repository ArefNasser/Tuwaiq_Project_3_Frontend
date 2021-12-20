import Link from "next/link";

const login = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
          <input type="text" name="Email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
