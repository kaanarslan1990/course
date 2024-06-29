import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import ManageCourse from './screens/ManageCourse';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentCourses from './screens/RecentCourses';
import AllCourses from './screens/AllCourses';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseOverview(){
  return (
    <Tab.Navigator screenOptions={{
      headerStyle:{backgroundColor:'pink'},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:'pink'},
      tabBarActiveTintColor:'darkblue'
    }}>
      <Tab.Screen name="RecentCourses" component={RecentCourses} options={{
        title:'Recent Saved',
        tabBarLabel:'Recent',
        tabBarIcon: ({color,size})=> (
          <AntDesign name="hourglass" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="AllCourses" component={AllCourses} options={{
        title:'All Courses ',
        tabBarLabel:'All',
        tabBarIcon: ({color,size})=> (
          <Entypo name="list" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="CourseOverview" component={CourseOverview} options={{headerShown:false}} />
      <Stack.Screen name="ManageCourse" component={ManageCourse} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
