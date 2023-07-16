/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FormEvent } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { createUser, loginUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignUpFormInputs {
  email: string;
  password: string;
}
const LogInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const email = form?.email.value;
    const password = form?.password.value;
    console.log(email, password);
    await dispatch(loginUser({ email: email, password: password }));
    toast.success("Logged in");
    form.reset();
    navigate("/");
  };
  return (
    <div>
      <section className="mx-auto">
        <div className="flex min- overflow-hidden">
          <div className="flex flex-col justify-center flex-1 px-4 py-12 ">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div className="mt-8">
                <div className="mt-6">
                  <h1 className="text-center text-3xl font-bold mb-8">
                    Sign In 🚀
                  </h1>
                  <form className="space-y-6" onSubmit={handleSignUp}>
                    <div>
                      <label className="block text-sm font-medium text-neutral-600">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-neutral-600">
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label className="block ml-2 text-sm text-neutral-600">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogInForm;
