import LoginForm from "@/components/auth/LoginForm";
import { Check } from "lucide-react";
import appleIcon from "../assets/apple-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import metaIcon from "../assets/meta-icon.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex relative bg-[hsl(220,20%,8%)] overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 55% at 80% 40%, rgba(0, 110, 100, 0.75) 0%, transparent 100%),
            radial-gradient(ellipse 75% 75% at 100% 100%, rgba(255, 90, 15, 0.9) 0%, rgba(180, 50, 0, 0.3) 60%, transparent 100%)
          `,
        }}
      />
      {/* Left Content */}
      <div className="hidden lg:flex w-1/2 relative z-10 items-center px-20">
        <div className="max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-20">
            <div className="w-7 h-7 rounded-full bg-primary" />
            <span className="text-xl font-bold text-white">aps</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-10">
            Expert level Cybersecurity in{" "}
            <span className="text-primary">hours</span> not weeks.
          </h1>

          {/* Features */}
          <p className="text-sm text-white mb-4 font-semibold">
            What's included
          </p>

          <ul className="space-y-3">
            {[
              "Effortlessly spider and map targets to uncover hidden security flaws",
              "Deliver high-quality, validated findings in hours, not weeks.",
              "Generate professional, enterprise-grade security reports automatically.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300 text-sm">
                <Check className="w-4 h-4 text-primary mt-1" />
                {item}
              </li>
            ))}
          </ul>

          {/* Rating */}
          <div className="mt-16 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary">★</span>
              <span className="text-white text-sm font-medium">Trustpilot</span>
            </div>
            <p className="text-white">
              <span className="font-semibold">Rated 4.5/5.0</span>{" "}
              <span className="text-gray-400">(100k+ reviews)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center z-10 px-6">
        {/* Card */}
        <div className="w-full max-w-md bg-background rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-1">Sign up</h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Already have an account?{" "}
            <button className="text-primary font-medium hover:underline">
              Log in
            </button>
          </p>

          <LoginForm />

          {/* Social Login */}
          <div className="flex gap-3 mt-4">
            <button onClick={()=> navigate("/dashboard")} className="flex-1 flex justify-center items-center border p-2 rounded-full cursor-pointer hover:bg-muted">
              <img src={appleIcon} alt="apple" height={24} width={24} />
            </button>
            <button onClick={()=> navigate("/dashboard")} className="flex-1  flex justify-center items-center border p-2 rounded-full cursor-pointer hover:bg-muted">
            <img src={googleIcon} alt="google" height={24} width={24} />
            </button>
            <button onClick={() => navigate("/dashboard")} className="flex-1 flex justify-center items-center border p-2 rounded-full cursor-pointer hover:bg-muted">
            <img src={metaIcon} alt="meta" height={24} width={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
