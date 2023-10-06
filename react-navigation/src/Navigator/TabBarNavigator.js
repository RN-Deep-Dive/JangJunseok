import ScreenD from "../Screen/ScreenD";
import ScreenC from "../Screen/ScreenC";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ScreenC"
        component={ScreenC}
        initialParams={{ user: "initial" }}
      />
      <Tab.Screen name="ScreenD" component={ScreenD} />
    </Tab.Navigator>
  );
};
