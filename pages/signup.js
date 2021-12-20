const signup = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Sign up</h1>
          <input type="text" name="Name" placeholder="Name" />
          <input type="text" name="Email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button type="submit">Create Account</button>
          <Link href="/">Do you have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default signup;
