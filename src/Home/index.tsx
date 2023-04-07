import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {styles} from './styles'

export function Home() {
  const [ permission, requestPermission ] = Camera.useCameraPermissions();


  useEffect(() => {
    requestPermission()
  }, []);

  if (!permission?.granted){
    return;
  }

  return (
    <View style={styles.container}>
    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  </View>
  );
}