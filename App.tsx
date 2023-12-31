import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Route from './src/Route';
import { NavigationContainer } from '@react-navigation/native';
import { LogLevel, OneSignal } from 'react-native-onesignal';


OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize("603e244f-5f87-497f-8b53-22adeb990adb");
OneSignal.Notifications.requestPermission(true);
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});


function App(): JSX.Element {


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
