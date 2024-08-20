import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../App";
import { Link, json,useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [btnText,setBtnText]=useState('Sign up')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    default: {
      firstName: "",
      email: "",
      message: "",
    },
  });

  const handleSignup = async (data) => {
    try {
      setBtnText('Processing ...')
      axios
        .post(`${baseUrl}/auth/signup`, data)
        .then((res) => {
          if(res?.status===201){
            alert("Your password has been sent to your email id.");
            navigate("/sign-in")
          }
        })
        .catch((error) => {
          if (error?.response?.status===409) {
            alert("user exists please log in");
          }else{
            alert("server not working, please try later");

          }
        });
    } catch (error) {
      alert(error.message);
    }
    setBtnText('Sign up')
  };

  

  // const [error, setError] = useState();

  return (
    <>
      <div data-theme="light" className=" h-full   flex h-screen justify-center items-center">
        <div className="flex   m-auto  border-2 rounded flex-col px-8 py-4 sm:w-[300px]  lg:w-[400px]">
          <div className="sm:mx-auto  sm:w-full text-center  sm:max-w-sm">
            <img
              className="mx-auto inline mt-[-9px] h-4 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h1 className="text-center inline pt-2 text-2xl font-bold  leading-9 tracking-tight text-gray-900">
              HOMEBOX
            </h1>

            <h2 className="  text-center text-2xl  leading-9 tracking-tight text-gray-900">
              Sign up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6 flex flex-col lg:gap-4 "
              onSubmit={handleSubmit((data) => handleSignup(data))}
              // onSubmit={}
            >
              {/* first name */}
              <div className="">
                {errors.firstName?.type === "required" ? (
                  <p className="lg:mt-[-25px] mt-[-20px] absolute text-error  ">
                    first name required
                  </p>
                ) : (
                  ""
                )}
                {errors.firstName?.type === "minLength" ? (
                  <p className="lg:mt-[-25px] mt-[-20px] absolute text-error  ">
                    enter valid first name
                  </p>
                ) : (
                  ""
                )}
                <label
                  htmlFor="firstName"
                  className="input input-primary flex items-center gap-2"
                >
                  <input
                    type="text"
                    className="grow "
                    placeholder="First Name"
                    {...register("firstName", {
                      required: true,
                      minLength: 3,
                    })}
                  />
                </label>
              </div>

              {/* last name */}
              <div className="">
                {errors.lastName?.type === "required" ? (
                  <p className="lg:mt-[-25px] mt-[-20px] absolute text-error  ">
                    last name required
                  </p>
                ) : (
                  ""
                )}
                {errors.lastName?.type === "minLength" ? (
                  <p className="lg:mt-[-25px] mt-[-20px] absolute text-error  ">
                    enter valid last name
                  </p>
                ) : (
                  ""
                )}
                <label
                  htmlFor="lastName"
                  className="input input-primary flex items-center gap-2"
                >
                  <input
                    type="text"
                    className="grow "
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: true,
                      minLength: 3,
                    })}
                  />
                </label>
              </div>

              {/* email field  */}
              <div className="">
                {errors.email?.type === "pattern" ? (
                  <p className="lg:mt-[-25px] mt-[-20px] absolute text-error ">
                    enter valid email
                  </p>
                ) : (
                  ""
                )}
                {errors.email?.type === "required" ? (
                  <p className="lg:mt-[-25px] mt-[-20px] absolute text-error  ">
                    email required
                  </p>
                ) : (
                  ""
                )}
                <label
                  htmlFor="email"
                  className="input input-primary flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow "
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </label>
              </div>

              {/* password field  */}
              {/* <div className="">
                {errors.password?.type === "required" ? (
                  <p className="mt-[-25px] absolute text-error">
                    password required
                  </p>
                ) : (
                  ""
                )}
                {errors.password?.type === "minLength" ? (
                  <p className="mt-[-25px] absolute text-error">
                    paasword al leat 8 character
                  </p>
                ) : (
                  ""
                )}
                {errors.password?.type === "pattern" ? (
                  <p className="mt-[-25px] absolute text-error">
                    the password must contains at least one number ,one special
                    key,one lowwercase,one uppercase
                  </p>
                ) : (
                  ""
                )}
                <label
                  htmlFor="password"
                  className="input input-primary flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      // pattern:
                      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{30,}$/,
                    })}
                  />
                </label>
              </div> */}

              <button
                type="submit"
                className="btn w-full text-white btn-primary "
                disabled={btnText==='Sign up'?false:true}
              >
                {btnText}
              </button>
            </form>
            <p  className="mt-2 text-center text-base text-gray-500">
      Already have account: <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="sign-in"> Sign in</Link>
      
    </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Registration;
