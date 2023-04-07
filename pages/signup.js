import { signUp } from 'next-auth/client';

function SignupPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupPage;
