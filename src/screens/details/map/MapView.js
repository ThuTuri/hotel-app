import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapViewScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
          latitude: 16.075239,
          longitude: 108.224136,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}
      >
          <Marker coordinate={{
              latitude: 16.061680,
              longitude: 108.245470,
          }}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});