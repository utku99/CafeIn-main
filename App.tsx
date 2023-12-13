import React from 'react';
import {
  SafeAreaView, Text, StatusBar, Alert
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import UserRegister from './src/screens/auth/UserRegister';
import Login from './src/screens/auth/Login';
import Route from './src/Route';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import CafeDetail from './src/screens/CafeDetail';
import CafeMenu from './src/screens/CafeMenu';
import Adminpage from './src/screens/Adminpage';

function App(): JSX.Element {

  // const createTwoButtonAlert = () =>
  // Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //     },
  //     { text: 'OK', onPress: () => console.log('OK Pressed') },
  // ]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar barStyle={'light-content'} backgroundColor={"#C89E51"} />

          <UserRegister />
          {/* <Login /> */}
          {/* <Home /> */}
          {/* <CafeDetail /> */}
          {/* <CafeMenu /> */}
          {/* <Adminpage /> */}

        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
