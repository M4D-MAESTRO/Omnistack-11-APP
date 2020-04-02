import React, { useEffect, useState, Component } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import mapping from './styles';

export default function Map() {
    const [currentRegion, setCurrentRegion] = useState(null);
    const [ong, setOng] = useState([]);
    const route = useRoute();

    const latitude = route.params.latitude;
    const longitude = route.params.longitude;

    useEffect(() => {

        async function loadInitialPosition() {
            setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
            });

        }

        loadInitialPosition();
        console.log(latitude, longitude)
    }, []);

    function handleRegionChanged(region) {
        setCurrentRegion(region);
    }

    return (
        <MapView onRegionChangeComplete={handleRegionChanged}
            initialRegion={currentRegion}
            style={mapping.map} >

            < Marker
                key={ong._id}
                coordinate={{
                    longitude,
                    latitude
                }}>
                {/*<Image style={mapping.avatar} source={{ uri: dev.avatar_url }} />*/}
            </Marker>
        </MapView>
    );

}
