import { postLogin } from '../apis/user.api'
import { useState } from 'react';
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    postLogin({email : email , password : password })
      .then(() => navigate('/produits-admin'))
      .catch(() => alert("Something wrong happened ! Try later"));
  }

  return (
    <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <a href="https://kreatek.tn/" target='_blank' rel='noreferrer' className="flex items-center  mb-4 space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
    </a>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""  onChange={ (e)=>setEmail(e.target.value) }/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""  onChange={ (e)=>setPassword(e.target.value) } />
                  </div>
                  <button type="submit" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign in</button>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
