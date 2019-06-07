import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserLogin from '../screens/containers/login/index';
import Home from '../screens/component/home/index';

const AppNavigator = createStackNavigator({
    UserLogin,
    Home
},{
    headerMode: 'none',
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
