
function Login() {
    return (
        <div className="flex m-8 justify-center px-4">

            <div className="w-full max-w-md rounded-2xl p-8 shadow-lg">

                <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
                    Login
                </h1>

                <p className="mb-6 text-center text-gray-500">
                    Welcome back! Please login to your account.
                </p>

                <form>
                    <div className="mb-4">
                        <label for="email" className="mb-2 block font-medium text-gray-700">
                            Email
                        </label>

                        <input type="email" id="email" placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label for="password" className="mb-2 block font-medium text-gray-700">
                            Password
                        </label>

                        <input type="password" id="password" placeholder="Enter your password" 
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <button type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95">
                        Login
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a href="#" className=" ml-1 font-semibold text-blue-600 hover:text-blue-800">
                        Register
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Login;
