import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, MessageCircle, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (email && password) {
        navigate('/student/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Failed to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-4xl opacity-30">✕</div>
      <div className="absolute bottom-32 left-10 text-4xl opacity-30">∇</div>

      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <svg
                  viewBox="0 0 300 400"
                  className="w-full max-w-sm"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background shapes */}
                  <circle cx="80" cy="80" r="15" fill="#FFB84D" opacity="0.6" />
                  <circle cx="250" cy="100" r="10" fill="#A78BFA" opacity="0.6" />
                  <circle cx="40" cy="200" r="8" fill="#FCA5A5" opacity="0.6" />
                  <circle cx="270" cy="200" r="12" fill="#93C5FD" opacity="0.6" />

                  {/* Lines connecting elements */}
                  <line x1="80" y1="80" x2="150" y2="150" stroke="#A78BFA" strokeWidth="2" opacity="0.4" />
                  <line x1="250" y1="100" x2="180" y2="180" stroke="#93C5FD" strokeWidth="2" opacity="0.4" />

                  {/* Child with glasses */}
                  <g>
                    {/* Head */}
                    <circle cx="150" cy="120" r="35" fill="#F4B183" />
                    {/* Hair */}
                    <path d="M 115 110 Q 150 80 185 110" fill="#4A4A4A" />
                    {/* Glasses */}
                    <circle cx="135" cy="115" r="8" fill="none" stroke="#333" strokeWidth="2" />
                    <circle cx="165" cy="115" r="8" fill="none" stroke="#333" strokeWidth="2" />
                    <line x1="143" y1="115" x2="157" y2="115" stroke="#333" strokeWidth="2" />
                    {/* Face */}
                    <circle cx="135" cy="115" r="5" fill="#333" opacity="0.5" />
                    <circle cx="165" cy="115" r="5" fill="#333" opacity="0.5" />
                    <path d="M 150 135 Q 145 140 150 145 Q 155 140 150 135" fill="#333" />

                    {/* Body */}
                    <rect x="125" y="160" width="50" height="60" rx="8" fill="#87CEEB" />
                    {/* Sleeves */}
                    <rect x="100" y="165" width="25" height="35" rx="6" fill="#87CEEB" />
                    <rect x="175" y="165" width="25" height="35" rx="6" fill="#87CEEB" />

                    {/* Arms */}
                    <line x1="100" y1="175" x2="70" y2="200" stroke="#F4B183" strokeWidth="6" strokeLinecap="round" />
                    <line x1="200" y1="175" x2="230" y2="200" stroke="#F4B183" strokeWidth="6" strokeLinecap="round" />

                    {/* Legs */}
                    <line x1="130" y1="220" x2="120" y2="280" stroke="#333" strokeWidth="6" strokeLinecap="round" />
                    <line x1="170" y1="220" x2="180" y2="280" stroke="#333" strokeWidth="6" strokeLinecap="round" />
                  </g>

                  {/* Coding/Tech icons around */}
                  {/* Code symbol */}
                  <text x="60" y="280" fontSize="40" fill="#7C3AED" opacity="0.8">&lt;&gt;</text>

                  {/* Document icon */}
                  <rect x="230" y="250" width="30" height="40" rx="2" fill="none" stroke="#FB923C" strokeWidth="2" />
                  <line x1="235" y1="265" x2="255" y2="265" stroke="#FB923C" strokeWidth="1.5" opacity="0.6" />
                  <line x1="235" y1="275" x2="255" y2="275" stroke="#FB923C" strokeWidth="1.5" opacity="0.6" />

                  {/* Lightbulb */}
                  <circle cx="110" cy="320" r="8" fill="#FFD700" opacity="0.8" />
                  <rect x="106" y="328" width="8" height="12" fill="#FFD700" opacity="0.8" />

                  {/* Rocket */}
                  <polygon points="220,320 210,340 220,335 230,340" fill="#EF4444" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              {/* Gradient Border Card */}
              <div
                className="relative rounded-3xl p-8 md:p-10 bg-white shadow-2xl"
                style={{
                  border: '3px solid transparent',
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FF1493 50%, #9370DB 75%, #4169E1 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                {/* Content */}
                <div>
                  {/* Heading */}
                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                      Welcome to Floyd School
                    </h1>
                    <p className="text-slate-500 text-sm">Log in your account</p>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your username or email"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded border-slate-300 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="text-sm text-slate-600 font-medium">Remember me</span>
                      </label>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-pink-600 hover:text-pink-700 font-medium transition"
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    {/* Continue Button */}
                    <div className="flex gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 px-6 py-3.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:shadow-lg hover:shadow-pink-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Continuing...' : 'Continue'}
                      </button>
                      <button
                        type="button"
                        className="px-6 py-3.5 bg-white border-2 border-green-400 text-green-600 font-black text-sm rounded-full hover:bg-green-50 transition-all flex items-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Talk to us</span>
                      </button>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="text-center text-xs text-slate-500 space-y-2">
                      <p>
                        By continuing you agree to our{' '}
                        <Link
                          to="/terms"
                          className="text-slate-900 font-semibold hover:underline"
                        >
                          Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link
                          to="/privacy"
                          className="text-slate-900 font-semibold hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </p>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                      <p className="text-slate-600 text-sm">
                        Don't have an account yet?{' '}
                        <Link
                          to="/signup"
                          className="text-pink-600 font-black hover:text-pink-700 transition"
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
              >
                <img
                  src="https://setu100.com/assets//new_home/img/icons/eye-off.svg"
                  alt="Eye Off"
                  className="w-4 h-4"
                />
                <img
                  src="https://setu100.com/assets//new_home/img/icons/eye.svg"
                  alt="Eye"
                  className="w-4 h-4 hidden"
                />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-teal-500 bg-white cursor-pointer"
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </div>

          {/* Forgot Password & Sign Up */}
          <div className="flex items-center justify-between">
            <Link
              to="/forgot-password"
              className="text-sm text-teal-600 hover:text-teal-500 transition font-medium float-left"
            >
              Forgot your password?
            </Link>
            <div className="flex items-center gap-2">
              <Link
                to="/signup"
                className="text-sm text-teal-600 hover:text-teal-500 transition font-medium font-semibold"
              >
                Don't have an account yet? Sign up
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? 'Logging in...' : 'Continue'}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            By continuing you agree to our{' '}
            <Link to="/terms" className="text-teal-600 hover:text-teal-500 transition font-medium">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-teal-600 hover:text-teal-500 transition font-medium">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;