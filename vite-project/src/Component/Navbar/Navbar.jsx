import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import myntra_logo from "../assets/myntra_logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { PiShoppingCartLight } from "react-icons/pi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [menu, setMenu] = useState("myntara");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 drop-shadow-2xl bg-white">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div onClick={() => setMenu("myntara")} className="flex flex-shrink-0 items-center xxl:hidden min-[375px]:pr-9 min-[320px]:pr-32 cursor-pointer">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src={myntra_logo}
                    alt="Your Company"
                    
                  /></Link>{" "}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    <div
                      className=" text-black hover:text-gray-600
                     py-2 text-base font-semibold "
                    >
                      <p onClick={() => setMenu("myntara")}>
                        <Link to="/">Myntara</Link>{" "}
                        {menu === "myntara" ? (
                          <hr className="w-{80%} h-1 rounded-lg bg-slate-900 border-0 " />
                        ) : (
                          <></>
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    <div
                      className=" text-black hover:text-gray-600 
                    block rounded-md px-3 py-2 text-base font-bold "
                    >
                      <p onClick={() => setMenu("men")}>
                        <Link to="/men">MENS</Link>{" "}
                        {menu === "men" ? (
                          <hr className="w-{80%} h-1 rounded-lg bg-slate-900  border-0 " />
                        ) : (
                          <></>
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    <div
                      className="text-gray-900 font-semibold hover:text-gray-600
                    block rounded-md px-3 py-2 text-base "
                    >
                      <p onClick={() => setMenu("women")}>
                        <Link to="/women">WOMENS</Link>{" "}
                        {menu === "women" ? (
                          <hr className="w-{80%} h-1 rounded-lg bg-slate-900  border-0 " />
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    <div
                      className="text-gray-900 font-semibold hover:text-gray-600
                    block rounded-md px-3 py-2 text-base "
                    >
                      <p onClick={() => setMenu("kid")}>
                        <Link to="/kid">KIDS</Link>{" "}
                        {menu === "kid" ? (
                          <hr className="w-{80%} h-1 rounded-lg bg-slate-900  border-0 " />
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {localStorage.getItem('auth-token')
                ?<button  className="relative rounded-full bg-gray-200 px-5 py-2 font-bold text-black hover:bg-black hover:text-white " onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
              :<Link to="/login">
                  <button
                    type="button"
                    className="relative rounded-full bg-black px-5 py-2 font-bold text-white hover:bg-white border-2 hover:text-black "
                  >
                    <span className="absolute -inset-1.5" />
                    <p>LOGIN</p>
                  </button>
                </Link>}
                

                {/* Profile dropdown */}

                <div className="relative ml-3 ">
                  <div className="relative flex p-1  text-4xl  rounded-lg ">
                    <Link to="/cart">
                    <PiShoppingCartLight />
                    </Link>
                    <div className="w-5 h-6 flex justify-center items-center -mt-3 -ml-7 rounded-xl text-sm font bg-black text-white animate-bounce">
                      {getTotalCartItems()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div
                className=" text-gray-300  hover:text-white
                     py-2 text-base font-medium"
              >
                <p onClick={() => setMenu("myntara")}>
                  <Link to="/">Myntara</Link>{" "}
                  {menu === "myntara" ? (
                    <hr className="w-{80%} h-1 rounded-lg bg-blue-500 border-0 " />
                  ) : (
                    <></>
                  )}{" "}
                </p>
              </div>
            </div>
            <div
              className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white
                    block rounded-md px-3 py-2 text-base "
            >
              <p onClick={() => setMenu("men")}>
                <Link to="/men">MENS</Link>{" "}
                {menu === "men" ? (
                  <hr className="w-{80%} h-1 rounded-lg bg-blue-500 border-0 " />
                ) : (
                  <></>
                )}{" "}
              </p>
            </div>
            <div
              className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white
                    block rounded-md px-3 py-2 text-base"
            >
              <p onClick={() => setMenu("women")}>
                <Link to="/women">WOMENS</Link>{" "}
                {menu === "women" ? (
                  <hr className="w-{80%} h-1 rounded-lg bg-blue-500 border-0 " />
                ) : (
                  <></>
                )}
              </p>
            </div>
            <div
              className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white
                    block rounded-md px-3 py-2 text-base "
            >
              <p onClick={() => setMenu("kid")}>
                <Link to="/kid">KIDS</Link>{" "}
                {menu === "kid" ? (
                  <hr className="w-{80%} h-1 rounded-lg bg-blue-500 border-0 " />
                ) : (
                  <></>
                )}
              </p>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
