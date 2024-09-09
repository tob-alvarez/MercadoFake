import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const DATA = [
    {
        id: '1',
        title: 'CONSEJOS DE SEGURIDAD',
        subtitle: 'CONOCÉ QUE HACER SI TE ROBAN EL TELEFONO',
        icon: 'cellphone-lock',
    },
    {
        id: '2',
        title: 'SEGURIDAD EN INTERNET',
        subtitle: 'APRENDE CÓMO PROTEGER TUS DATOS EN LÍNEA',
        icon: 'web',
    },
    {
        id: '3',
        title: 'CONSEJOS DE VIAJE',
        subtitle: 'CÓMO MANTENER TU TELÉFONO SEGURO EN VACACIONES',
        icon: 'airplane',
    },
];

const SliderItem = ({ title, subtitle, icon }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <MaterialCommunityIcons name={icon} size={34} color="white" style={styles.icon} />
            </View>
        </View>
    );
};

const Slider = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <SliderItem title={item.title} subtitle={item.subtitle} icon={item.icon} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={360} // Ajusta el valor según el ancho de tu tarjeta
            contentContainerStyle={styles.slider}
        />
    );
};

export default Slider;

const styles = StyleSheet.create({
    slider: {
        paddingHorizontal: 10,
    },
    container: {
        backgroundColor: "#048ec6",
        width: 360,
        marginRight: 10,
        borderRadius: 4,
        height: 80,
        padding: 10,
        shadowColor: '#000',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
        marginBottom: 30
    },
    title: {
        fontSize: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 14,
        color: 'white',
        width: '60%',
        fontWeight: 'bold',
    },
    icon: {
        position: 'absolute',
        right: 30,
        top: 10,
    },
});
