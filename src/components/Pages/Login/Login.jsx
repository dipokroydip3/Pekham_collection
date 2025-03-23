

const Login = () => {
      return (
            <div className="my-10  p-20 w-full mx-0 m-auto">

                  <div className="flex  justify-center items-center m-auto ">
                        <div className=" bg-gray-300 px-10 pb-20 rounded-md w-5/12 space-y-10">
                              <h3 className="text-center my-10 font-bold text-3xl ">Login</h3>
                              <input className="block bg-white w-full py-3 px-8 rounded" type="email" placeholder="Email" />
                              <input className="block bg-white w-full py-3 px-8 rounded" type="password" placeholder="Password" />
                              <button className="bg-red-500 block m-auto rounded text-white font-semibold px-10 py-3">Login</button>
                        </div>
                  </div>
            </div>
      );
};

export default Login;