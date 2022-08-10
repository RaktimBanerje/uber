import React from "react";
import { makeStyles, useThemeMode } from "@rneui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GuestStackNavigator from "../navigators/stacks/GuestStackNavigator";
import AppDrawerNavigator from "../navigators/drawers/AppDrawerNavigator"
import { StoreContext } from "../../App"
import { API_SERVER_URI } from "@env"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import LoginScreen from "../screens/LoginScreen"
import SplashScreen from "../screens/SplashScreen";

export default function Component() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const {state, dispatch} = React.useContext(StoreContext)

  const login = () => {

  }

  React.useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            const res = await axios.post(`${API_SERVER_URI}/api/driver/login`)
            if(res.status == 200) {
  
              dispatch({type: "LOGIN", payload: {user: res.data.driver, token: res.data.token}})
            }
            else if(res.status == 401) {
              login()
            }
            else {
              alert("Server Error: 500", "Try again later")
            }
        }
        else {
          login()
        }
      }
      catch (error) {
        alert("Oops!", "Try again later");
      }
    })()

  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {state.isLogin? <AppDrawerNavigator /> : <GuestStackNavigator />}
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
