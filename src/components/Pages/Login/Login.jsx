

const Login = () => {
      return (
            <div className="my-10 w-11/12 m-auto">
                  This is login page

                  <div className="w-6/12 space-y-10 inline-block ml-300 m-auto mx-0">
                        <input className="block bg-gray-300 w-full py-3 px-8 rounded" type="email" placeholder="Email" />
                        <input className="block bg-gray-300 w-full py-3 px-8 rounded" type="password" placeholder="Password" />
                        <button className="bg-blue-700 rounded text-white font-semibold px-10 py-3">Login</button>
                        
                  </div> 
            </div>
      );
};

export default Login;