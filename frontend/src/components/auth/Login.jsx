import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/authApi";
import toast from "react-hot-toast";

function Login() {
  const [login, { isLoading, error, data }] = useLoginMutation();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    login(loginData);
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form
          className="shadow rounded bg-body"
          action="your_submit_url_here"
          method="post"
          onSubmit={submitHandler}
        >
          <h2 className="mb-4">Login</h2>
          <div className="mb-3">
            <label htmlFor="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/password/forgot" className="float-end mb-4">
            Forgot Password?
          </Link>

          <button
            id="login_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "LOGIN"}
          </button>

          <div className="my-3">
            <Link to="/register" className="float-end">
              New User?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
