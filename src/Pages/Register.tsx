import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Register() {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = register(name, email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="min-h-[70vh] bg-[#f4f8f5] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1050px]">
        <div className="grid overflow-hidden rounded-2xl border border-[#e1e8e3] bg-white shadow-sm lg:grid-cols-2">

          <div className="relative hidden overflow-hidden bg-[#174d2a] p-10 lg:flex lg:min-h-[650px] lg:flex-col lg:justify-between">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#35b84a]/20" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#a7d37c]/10" />

            <div className="relative z-10">
              <Link
                to="/"
                className="text-xl font-black uppercase tracking-[-0.06em] text-white"
              >
                Vegan Fuel
              </Link>

              <div className="mt-24 max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fdb9b]">
                  Join the movement
                </p>

                <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white">
                  Better fuel.
                  <br />
                  Better habits.
                </h1>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  Create your account and make plant-powered
                  nutrition part of your everyday routine.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Track your orders",
                    "Save your favourite products",
                    "Checkout faster",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs text-white/75"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                        <i className="bi bi-check2 text-[#8fdb9b]" />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <i className="bi bi-heart text-sm text-[#8fdb9b]" />
              </div>

              <p className="text-[10px] leading-4 text-white/55">
                Nutrition made simple.
                <br />
                No unnecessary extras.
              </p>
            </div>
          </div>

          <div className="flex items-center p-7 sm:p-10 lg:p-14">
            <div className="mx-auto w-full max-w-[420px]">
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#17a832]">
                  Get started
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#20242c]">
                  Create your account
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#7b827d]">
                  Join Vegan Fuel and start your plant-powered routine.
                </p>
              </div>

              {error && (
                <div className="mb-5 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-600">
                  <i className="bi bi-exclamation-circle mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6761]"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <i className="bi bi-person absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9ba39d]" />

                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#dfe6e0] bg-[#fafcfa] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#b0b6b1] focus:border-[#17af26] focus:bg-white focus:ring-4 focus:ring-[#17af26]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6761]"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9ba39d]" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#dfe6e0] bg-[#fafcfa] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#b0b6b1] focus:border-[#17af26] focus:bg-white focus:ring-4 focus:ring-[#17af26]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6761]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9ba39d]" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      placeholder="Create a password"
                      className="w-full rounded-xl border border-[#dfe6e0] bg-[#fafcfa] py-3.5 pl-11 pr-11 text-sm outline-none transition placeholder:text-[#b0b6b1] focus:border-[#17af26] focus:bg-white focus:ring-4 focus:ring-[#17af26]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ba39d] hover:text-[#17a832]"
                    >
                      <i
                        className={`bi ${
    showPassword
        ? "bi-eye-slash"
        : "bi-eye"
} `}
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6761]"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <i className="bi bi-shield-check absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9ba39d]" />

                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      required
                      placeholder="Repeat your password"
                      className="w-full rounded-xl border border-[#dfe6e0] bg-[#fafcfa] py-3.5 pl-11 pr-11 text-sm outline-none transition placeholder:text-[#b0b6b1] focus:border-[#17af26] focus:bg-white focus:ring-4 focus:ring-[#17af26]/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((value) => !value)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ba39d] hover:text-[#17a832]"
                    >
                      <i
                        className={`bi ${
    showConfirmPassword
        ? "bi-eye-slash"
        : "bi-eye"
} `}
                      />
                    </button>
                  </div>
                </div>

                <label className="flex cursor-pointer items-start gap-2 pt-1 text-[10px] leading-4 text-[#737a75]">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-3.5 w-3.5 accent-[#17af26]"
                  />

                  <span>
                    I agree to the terms and privacy policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#17af26] px-5 py-3.5 text-xs font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#128d20] hover:shadow-lg hover:shadow-[#17af26]/15"
                >
                  Create account
                  <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="my-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#edf0ed]" />

                <span className="text-[9px] uppercase tracking-wider text-[#a0a6a1]">
                  Already a member?
                </span>

                <span className="h-px flex-1 bg-[#edf0ed]" />
              </div>

              <Link
                to="/login"
                className="flex w-full items-center justify-center rounded-full border border-[#dfe6e0] px-5 py-3 text-xs font-bold text-[#303832] transition hover:border-[#17af26] hover:bg-[#f5faf6] hover:text-[#128d20]"
              >
                Sign in instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}