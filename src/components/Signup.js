import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Resetting the errors on form submit
    setErrors({});

    // Basic validation
    let formIsValid = true;

    if (!name) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name is required",
      }));
      formIsValid = false;
    } else if (name.length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        name: "must add 3 or more letters",
      }));
      formIsValid = false;
    }
     else if (!/^[a-zA-Z ]+$/.test(name)) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should only contain letters",
      }));
      formIsValid = false;
    }

    if (!email) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is required",
      }));
      formIsValid = false;
    }
    else if (/^[A-Za-z][A-Za-z0-9._%+-]*@^[A-Za-z]+\.[A-Za-z]{2,}$/.test(email)) {
        setErrors((prevState) => ({
          ...prevState,
          email: "please follow proper e-mail format",
        }));
        formIsValid = false;
      }


   
    if (!password) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
      formIsValid = false;
    }
    else if (password.length<4) {
        setErrors((prevState) => ({
          ...prevState,
          password: "must add 4 or more",
        }));
        formIsValid = false;
      }

    if (!confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "Confirm Password is required",
      }));
      formIsValid = false;
    }

    else if (password !== confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "Passwords do not match",
      }));
      formIsValid = false;
    }

    if (formIsValid) {
      // Proceed with form submission or other actions
      localStorage.setItem("Name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/login");
    }
  };

  return (
    <>
      <section className="bg-gray-500 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className=" w-full  bg-gradient-to-b from-green-300 to-yellow-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-6  py-1 space-y-4 md:space-y-1 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Registration form
              </h1>
              <form
                className="space-y-2 md:space-y-4"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your full name <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`bg-gray-50 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Hardik ..."
                    value={name}
                    onChange={handleNameChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="name@company.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password <sup className="text-red-500">*</sup>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={`bg-gray-50 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${
                      errors.confirmPassword
                        ? " border-red-500"
                        : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
             
           
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-white"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <NavLink
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
