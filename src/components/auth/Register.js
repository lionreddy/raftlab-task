
import { DASHBOARD, LOGIN } from "lib/routes";
import { Link as RouterLink, Link } from "react-router-dom";
import { useRegister } from "hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "utils/form-validate";

export default function Register() {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
  }

  return (
    <div class="flex justify-center items-center h-screen">
  <div class="mx-1 max-w-md p-9 border-2 border-gray-300 rounded-lg">
    <h2 class="mb-4 text-lg text-center">Register</h2>

    <form onSubmit={handleSubmit(handleRegister)}>
      <div class="mb-2">
        <label class="block">Username</label>
        <input
          class="w-full px-2 py-1 border-2 rounded"
          type="text"
          placeholder="username"
          {...register("username", usernameValidate)}
        />
        <p class="text-red-500">{errors.username && errors.username.message}</p>
      </div>
      <div class="mb-2">
        <label class="block">Email</label>
        <input
          class="w-full px-2 py-1 border-2 rounded"
          type="email"
          placeholder="user@email.com"
          {...register("email", emailValidate)}
        />
        <p class="text-red-500">{errors.email && errors.email.message}</p>
      </div>
      <div class="mb-2">
        <label class="block">Password</label>
        <input
          class="w-full px-2 py-1 border-2 rounded"
          type="password"
          placeholder="password123"
          {...register("password", passwordValidate)}
        />
        <p class="text-red-500">{errors.password && errors.password.message}</p>
      </div>
      <button
        class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Signing Up" : "Register"}
      </button>
    </form>

    <p class="text-xl text-center mt-6">
      Already have an account?{" "}
      <Link
        to={LOGIN}
        class="text-teal-800 font-medium underline hover:bg-teal-100"
      >
        Log In
      </Link>
    </p>
  </div>
</div>

  );
}
