
  import { DASHBOARD, REGISTER } from "lib/routes";
  import { Link as RouterLink } from "react-router-dom";
  import { useLogin } from "hooks/auth";
  import { useForm } from "react-hook-form";
  import { emailValidate, passwordValidate } from "utils/form-validate";
  
  export default function Login() {
    const { login, isLoading } = useLogin();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    async function handleLogin(data) {
      login({
        email: data.email,
        password: data.password,
        redirectTo: DASHBOARD,
      });
    }
  
    return (
        <>
<div className="flex items-center justify-center w-screen h-screen">
  <div className="mx-1 max-w-md p-9 border-2 rounded-lg">
    <h2 className="mb-4 text-lg text-center">Log In</h2>

    <form onSubmit={handleSubmit(handleLogin)}>
    <div className={`py-2 ${errors.email ? "border-red-500" : ""}`}>
  <label className="block mb-2">Email</label>
  <input
    type="email"
    placeholder="user@email.com"
    {...register("email", emailValidate)}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
  {errors.email && (
    <span className="text-red-500">{errors.email.message}</span>
  )}
</div>

<div className={`py-2 ${errors.password ? "border-red-500" : ""}`}>
  <label className="block mb-2">Password</label>
  <input
    type="password"
    placeholder="password123"
    {...register("password", passwordValidate)}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
  {errors.password && (
    <span className="text-red-500">{errors.password.message}</span>
  )}
</div>


      <button
        type="submit"
        className="mt-4 w-full px-4 py-2 text-white bg-teal-500 rounded-md"
        disabled={isLoading}
      >
        {isLoading ? "Logging In" : "Log In"}
      </button>
    </form>

    <p className="text-lg text-center mt-6">
      Don't have an account?{" "}
      <RouterLink
        to={REGISTER}
        className="text-teal-800 font-medium underline hover:bg-teal-100"
      >
        Register
      </RouterLink>
    </p>
  </div>
</div>
</>
    );
  }
  