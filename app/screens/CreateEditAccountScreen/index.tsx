// AccountScreen.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SignUpForm from '@/components/account-form';

const AccountScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const checkLoginStatus = async () => {
      const loggedIn = await checkIfUserIsLoggedIn(); 
      setIsLoggedIn(loggedIn);

      if (loggedIn) {
        const data = await fetchUserData(); 
        setUserData(data);
      }
    };

    checkLoginStatus();
  }, []);

  const handleSignUpSubmit = (values) => {
    console.log(values);
  };

  return (
    <View>
      <SignUpForm onSubmit={handleSignUpSubmit} initialValues={isLoggedIn ? userData : {}} />
    </View>
  );
};

export default AccountScreen;


