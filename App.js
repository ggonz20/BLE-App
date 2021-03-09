// In App.js in a new project
//This code demonstrates how to make a react native navigation application. 
import * as React from 'react';
import { View, Text, Button, Component } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

import { BleManager } from 'react-native-ble-plx';



export class SCANPI extends Component {

//Initalizes BLE Manager
  constructor () {
  super();
  this.manager = new BleManager();
  console.log('Constructor Called.');
  }

  componentWillMount() {
    console.log('componentWillMount called.');
    const subscription = this.manager.onStateChange((state) => {
        if (state === 'PoweredOn') {
            this.scanAndConnect();
            subscription.remove();
        }
    }, true);

  }
scanAndConnect() {
  this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
          // Handle error (scanning will be stopped automatically)
          return
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'Raspberrypi' || 
          device.name === 'Raspberrypi') {
          
          // Stop scanning as it's not necessary if you are scanning for one device.
          this.manager.stopDeviceScan();

          // Proceed with connection.
      }

      device.connect()
      {
          Raspberrypi.then((device) => {
              return device.discoverAllServicesAndCharacteristics()
          })
          .then((device) => {
             // Do work on device with services and characteristics
          })
          .catch((error) => {
              // Handle errors
          });
        }
      


  });

}


render () {
 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Grid>
      <Col style={{backgroundColor:"red"}}></Col>
      <Col style={{backgroundColor:"blue"}}></Col>
  </Grid>
      <Text>Bluetooth is scanning and connecting.</Text>
  
    </View>
  )
}
}
export default SCANPI;
