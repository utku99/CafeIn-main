import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Route from './src/Route';
import { NavigationContainer } from '@react-navigation/native';


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
        <SafeAreaView className="flex-1">
          <StatusBar barStyle={'light-content'} backgroundColor={"#C89E51"} />
          <Route />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
