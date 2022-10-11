import React from "react";
import { makeStyles, useThemeMode } from "@rneui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GuestStackNavigator from "../navigators/stacks/GuestStackNavigator";
import AppDrawerNavigator from "../navigators/drawers/AppDrawerNavigator"
import { StoreContext } from "../../App"
import { API_SERVER_URI } from "@env"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

export default function Component() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const {state, dispatch} = React.useContext(StoreContext)
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        let user = await AsyncStorage.getItem("user")
        user = JSON.parse(user)
        const token = await AsyncStorage.getItem("token")
        if (token) {
            const res = await axios.post(`${API_SERVER_URI}/api/driver/isAuthenticate`, {token})
            if(res.status == 200) {
              setLoading()
              dispatch(
                {
                  type: "LOGIN", 
                  payload: {user, token}
                }
              )
            }
            else {
              alert("Server Error: 500", "Try again later")
            }
        }
      }
      catch (error) {
        alert("Oops!", "Try again later");
      }
      finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {(isLoading == false && state.isLogin == true) ? <AppDrawerNavigator /> : <GuestStackNavigator />}
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
