// import React, { useState } from 'react';
// import api from "../../api/client.js";  // adjust path as needed


// export default function SignupPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });

//   const validate = () => {
//     let valid = true;
//     const newErrors = { name: '', email: '', password: '', confirmPassword: '' };

//     if (!name) {
//       newErrors.name = 'Name is required';
//       valid = false;
//     }

//     if (!email) {
//       newErrors.email = 'Email is required';
//       valid = false;
//     } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       newErrors.email = 'Invalid email format';
//       valid = false;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//       valid = false;
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       valid = false;
//     }

//     if (password !== confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     // Mock signup action
//     alert(`Signup successful! Welcome, ${name}`);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-50">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Sign Up for PetHub</h2>
//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">Confirm Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
//             />
//             {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="mt-4 text-center text-gray-600">
//           Already have an account? <a href="/login" className="text-green-600 hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import api from "../../api/client.js"; // axios instance

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [serverError, setServerError] = useState(""); // backend error
  const [success, setSuccess] = useState(""); // success message

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess("");

    if (!validate()) return;

    try {
      const response = await api.post("http://127.0.0.1:8001/api/register/", {
        name,
        email,
        password,
      });

      setSuccess("Signup successful! You can now log in.");
      console.log("Signup response:", response.data);

      // Optionally redirect to login page
      // window.location.href = "/login";
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        setServerError(error.response.data.detail || "Signup failed.");
      } else {
        setServerError("Server not reachable.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Sign Up for PetHub
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-green-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        {serverError && (
          <p className="text-red-500 text-sm text-center mt-3">
            {serverError}
          </p>
        )}
        {success && (
          <p className="text-green-600 text-sm text-center mt-3">{success}</p>
        )}

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
