

const Login = () => {
      return (
            <div className="my-10 w-full mx-0 m-auto">
                  <h3 className="text-center my-10">This is login page</h3>

                  <div className="flex justify-center items-center m-auto ">
                        <div className=" border w-5/12 space-y-10">
                              <input className="block bg-gray-300 w-full py-3 px-8 rounded" type="email" placeholder="Email" />
                              <input className="block bg-gray-300 w-full py-3 px-8 rounded" type="password" placeholder="Password" />
                              <button className="bg-blue-700 block m-auto rounded text-white font-semibold px-10 py-3">Login</button>
                        </div>
                  </div>
            </div>
      );
};

export default Login;