import SignUp from './signUp';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import Login from './login';
import Trial from './trial'


const AppNavigator = createStackNavigator(
    {
      Login: Login,
      SignUp: SignUp,
      trial: Trial
    },
    {
      initialRouteName: 'Login',
    }
  );
export default createAppContainer(AppNavigator);
