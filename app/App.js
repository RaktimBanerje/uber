import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { initialState, reducer } from './src/reducers';
import AppNavigator from './src/navigators/stacks/AppNavigator';
import ProfileModal from './src/Modal/ProfileModal';
import ScheduleModal from './src/Modal/ScheduleModal';

export const StoreContext = React.createContext(null)

export default function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    // console.log(state)
  }, [state])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StoreContext.Provider value={{state, dispatch}}>
          <AppNavigator />
          <ProfileModal />
          <ScheduleModal />
        </StoreContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
