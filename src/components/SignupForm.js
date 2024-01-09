import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("Student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    
  })

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }))
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    const finalData={
        ...accountData,
        accountType
    }
    console.log("Printing Final account data");
    console.log(finalData);
    navigate("/dashboard");
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "Student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          }
        py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          }
        py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-[20px]">
          <label>
            <p className="text-[0.85rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              name="firstName"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label>
            <p className="text-[0.85rem] text-richblack-5 mb-1 leading-[1.375rem]">
              last Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              name="lastName"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        <div className="mt-[20px]"></div>
        <label className="w-full mt-[20px]">
          <p className="text-[0.85rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email Address"
            name="email"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>

        <div className="flex w-full gap-x-4 mt-[20px]">
          <label className="relative">
            <p className="text-[0.85rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.85rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
              name="confirmPassword"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          className="w-full bg-yellow-50 rounded-[8px] font-medium 
        text-richblack-900 px-[12px] py-[8px] mt-6"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
