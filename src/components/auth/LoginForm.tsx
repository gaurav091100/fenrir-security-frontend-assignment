import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!agreed) {
      newErrors.agreed = "You must accept Terms & Conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Account Created:", form);
      navigate("/dashboard");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name */}
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-3 text-sm"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          value={form.lastName}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-3 text-sm"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email address*"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-3 text-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password (8+ characters)*"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-3 text-sm pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      <div>
        {/* Checkbox */}
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-[5px]"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            I agree to Aps's{" "}
            <button
              type="button"
              className="text-blue-500 underline cursor-pointer"
            >
              Terms & Conditions
            </button>{" "}
            and acknowledge the{" "}
            <button
              type="button"
              className="text-blue-500 underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </span>
        </label>
        {errors.agreed && (
          <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary hover:opacity-90 transition-opacity text-white py-2 rounded-full cursor-pointer"
      >
        Create account
      </button>
    </form>
  );
};

export default LoginForm;
