import React, { useState } from 'react';
import Button from 'components/primitives/Button';
import { useLogin } from 'context/LoginContext';
import { Input } from 'components/primitives/Input';
import useObjectState from 'hooks/useUpdateState';

const LoginForm = () => {
  const loginContext = useLogin();
  const [loading, setLoading] = useState(false);
  const [userDetails, updateUserDetails, resetUserDetails] = useObjectState({
    username: '',
    password: '',
  });

  if (loginContext.isLoggedIn) {
    return <Button label={'Log out'} action={() => loginContext.logOut()} />;
  }

  const verifyLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    await loginContext.checkLogin(userDetails.username, userDetails.password);
    resetUserDetails();
    setLoading(false);
  };

  return (
    <form onSubmit={(e) => verifyLogin(e)}>
      <div className="flex-row">
        <div className="flex-col">
          <Input
            label="Username"
            value={userDetails.username}
            onUpdate={updateUserDetails('username')}
          />
          <Input
            label="Password"
            value={userDetails.password}
            type="password"
            onUpdate={updateUserDetails('password')}
          />
        </div>
        <Button type="submit" label="Log in" disabled={loading} />
      </div>
    </form>
  );
};

export default LoginForm;
