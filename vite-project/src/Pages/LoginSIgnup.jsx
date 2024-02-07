import { useState } from "react"

export default function LoginSignup() {
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async () =>{
 console.log("login",formData);
 let responseData;
 await fetch('https://e-com-uryk.onrender.com/login',{
   method:'POST',
   headers:{
     Accept:'application/form-data',
     'Content-Type':'application/json',
   },
   body:JSON.stringify(formData),
 }).then((response)=>response.json()).then((data)=>responseData=data)

 if(responseData.success){
   localStorage.setItem('auth-token',responseData.token);
   window.location.replace("/")
 }
 else{
   alert(responseData.error)
 }
  }

  const signup = async() =>{
  console.log("signup",formData);
  let responseData;
  await fetch('https://e-com-uryk.onrender.com/signup',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData=data)

  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/")
  }
  else{
    alert(responseData.error)
  }

  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {state}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <div>
              <div className="mt-2">
                {state === 'Signup'?<input
                  name="username"
                  value={formData.username}
                  onChange={changeHandler}
                  type="text"
                  placeholder="Name"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />:<></>}
                
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium  py-2  leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm  py-2  font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="py-5">
              <button onClick={()=>{state === "Login"?login():signup()}}
                className="flex w-full justify-center rounded-md bg-blue-500 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>  
           {state === "Signup"? <p className="mt-10 text-center text-sm text-gray-500">already have an account
            <span onClick={()=>{setState("Login")}} className="font-semibold leading-6 pl-2 text-blue-500 hover:text-black">
              sign in</span>
          </p>: <p className="mt-10 text-center text-sm text-gray-500">
           Create new account
            <span onClick={()=>{setState("Signup")}} className="font-semibold  leading-6 pl-2 text-blue-500 hover:text-black">
              sign up
            </span>
          </p>}
         
         
        </div>
      </div>
    </>
  )
}
