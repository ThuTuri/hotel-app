import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverLay from '../../components/ui/LoadingOverlay'
import { AuthContext } from '../../store/auth-context';
import { createUser } from '../../util/auth';

function SignupScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext)

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
     const token = await createUser(email, password);
     setIsAuthenticating(false);
      authCtx.authenticate(token);
      Alert.alert(
        "Signup success!",
        "You can login now",
        [
            { text: "OK", onPress: () => { navigation.replace('Login') } }
        ]
    );
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverLay message="Creating user..." />
  }


  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
