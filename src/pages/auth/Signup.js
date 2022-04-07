import {
  React,
  useState,
  useEffect,
  Link,
  useNavigate,
  SignupImage,
  AuthContainer,
  useAuth,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  AiOutlineArrowRight,
  FaEnvelope,
  changeDocumentTitle,
  toast,
} from "./index";
import "./auth.css"

export const Signup = () => {
  useEffect(() => {
    changeDocumentTitle("Hotstream-Signup");
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const { signup } = useAuth();
  const handleOnClick = async (e) => {
    e.preventDefault();
    const success = await signup(formData);
    if (success) {
      toast.success("Signup successful");
      navigate("/");
    } else {
      toast.error("Wrong credentials");
    }
  };
  return (
    <AuthContainer title="Signup" imageUrl={SignupImage}>
      <form
        className="signup-form-container flex-col"
        onSubmit={(e) => handleOnClick}
      >
        <ul>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs text-white" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                className="input-field form-control text-xs"
                type="text"
                placeholder="priya"
                value={formData.firstName}
                onChange={handleOnChange}
                required
              />
            </div>
          </li>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs text-white" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                className="input-field form-control text-xs"
                type="text"
                placeholder="patel"
                value={formData.lastName}
                onChange={handleOnChange}
                required
              />
            </div>
          </li>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs text-white" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="input-field form-control text-xs"
                type="email"
                placeholder="priya@gmail.com"
                value={formData.email}
                onChange={handleOnChange}
                required
              />
              <FaEnvelope className="email-icon text-xs"></FaEnvelope>
            </div>
          </li>
          <li className="list-style-none">
            <div className="password-field-container">
              <label className="text-xs text-white" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="input-field form-control text-xs"
                type={showPassword ? "text" : "password"}
                placeholder="•••••••••"
                value={formData.password}
                onChange={handleOnChange}
                required
              />
              {showPassword ? (
                <BsFillEyeFill
                  className="password-eye-icon text-xs"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                ></BsFillEyeFill>
              ) : (
                <BsFillEyeSlashFill
                  className="password-eye-icon text-xs"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                ></BsFillEyeSlashFill>
              )}
            </div>
          </li>
        </ul>
        <button
          type="submit"
          className="button primary-button-pink my-2 text-xs"
        >
          Create New Account
        </button>

        <div>
          <Link to="/login" className="text-xs text-white">
            Already have an account
            <span>
              <AiOutlineArrowRight className="ml-2"></AiOutlineArrowRight>
            </span>
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
};
