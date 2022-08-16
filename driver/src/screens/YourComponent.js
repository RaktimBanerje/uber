import { Text } from "@rneui/themed";
import React from "react"
import { TouchableHighlight, View } from "react-native";
// var TouchID = require('react-native-touch-id');
import TouchID from 'react-native-touch-id'
 
class YourComponent extends React.Component {
  _pressHandler() {
    TouchID.authenticate('to demo this react-native component',{
        title: 'Authentication Required', // Android
        imageColor: '#e00606', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    })
      .then(success => {
        console.log('Authenticated Successfully');
      })
      .catch(error => {
        console.log('Authentication Failed');
      });

      TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
            console.log('FaceID is supported.');
        } else {
            console.log('TouchID is supported.');
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={this._pressHandler}>
          <Text>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

export default YourComponent