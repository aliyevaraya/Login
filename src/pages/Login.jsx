import { useFormik } from "formik";
import { loginSchema } from "../schema";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    actions.resetForm();
    const newUser = { ...values, token: true };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/");
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      token: false,
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
