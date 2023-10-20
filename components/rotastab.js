import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import{MaterialCommunityIcons} from "@expo/vector-icons";

import Boku from "./Boku"
import Home from "./home"
import Clover from "./Clover"

const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShowh:false}}>

      <Tab.Screen name="Boku No Hero" component={Boku} options={{
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="school" color={'darkblue'} size={30}/>
      }}/>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={'gray'} size={30}/>
      }}/>
      <Tab.Screen name="Black Clover" component={Clover} options={{
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="clover" color={'lightgreen'} size={30}/>
      }}/>

    </Tab.Navigator>
  );
}

