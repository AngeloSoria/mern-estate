import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form className='flex flex-col gap-4'>
        <input id='username' type="text" placeholder='username' className='border p-3 rounded-lg' />
        <input id='email' type="email" placeholder='email' className='border p-3 rounded-lg' />
        <input id='password' type="password" placeholder='password' className='border p-3 rounded-lg' />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"} className="text-slate-700 hover:underline">
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
