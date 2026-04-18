import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signIn } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (isSignUp) {
      const { error } = await signUp(email, password);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Account created! Check your email for a confirmation link, or sign in directly.');
        setIsSignUp(false);
        setEmail('');
        setPassword('');
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        onClose();
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-indigo-600 px-8 py-6">
          <h2 className="text-2xl font-extrabold text-white font-headline tracking-tight">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-white/70 text-sm font-medium mt-1">
            {isSignUp ? 'Start tracking your physics mastery' : 'Sign in to sync your progress'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600 font-medium">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-600 font-medium">
              {success}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block p-3 transition-all outline-none placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block p-3 transition-all outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm py-3 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing...
              </span>
            ) : (
              isSignUp ? 'Create Account' : 'Sign In'
            )}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => { setIsSignUp(!isSignUp); setError(''); setSuccess(''); }}
              className="text-sm text-slate-500 hover:text-primary font-semibold transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-white/60 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
