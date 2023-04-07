import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: '32px', borderRadius: '8px', boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)' }}>
        <label style={{ display: 'block', marginBottom: '16px', fontWeight: 'bold', fontSize: '16px' }}>
          Email
          <input style={{ display: 'block', marginTop: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '16px', fontWeight: 'bold', fontSize: '16px' }}>
          Password
          <input style={{ display: 'block', marginTop: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {isSignUp && (
          <label style={{ display: 'block', marginBottom: '16px', fontWeight: 'bold', fontSize: '16px' }}>
            Confirm Password
            <input style={{ display: 'block', marginTop: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </label>
        )}
        <button style={{ backgroundColor: '#0070f3', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', alignSelf: 'flex-end', marginBottom: '16px' }} type="submit">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
        <span style={{ fontSize: '14px' }}>{isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}</span>
        <button style={{ backgroundColor: 'transparent', color: '#0070f3', padding: '0', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} type="button" onClick={toggleSignUp}>
          {isSignUp ? 'Log In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
