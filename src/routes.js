/**
 * Desafio 3 - RocketSeat
 * ROUTES
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Home from "~/pages/Home";

// Colors
import { colors } from "~/styles";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null,
        headerTitleContainerStyle: {
          left: 0
        },
        headerTitleStyle: {
          flex: 1,
          textAlign: "center"
        }
      }
    },
    {
      headerLayoutPreset: "center"
    }
  )
);

export default Routes;
