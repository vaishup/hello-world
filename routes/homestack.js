import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/revideDetails';
import About from '../screens/about';


const Screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen : ReviewDetails
    }
}


const HomeStack = createStackNavigator(Screens)

export default createAppContainer(HomeStack);