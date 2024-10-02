import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
    logo: any;           // Imagen del logo (puede ser require o una URL)
    storeName: string;    // Nombre de la tienda
    offer: string;        // Detalle de la oferta
    buttonText: string;   // Texto del botón inferior
    onPress: () => void;  // Acción al presionar el botón
}

const Cupon: React.FC<CardProps> = ({ logo, storeName, offer, buttonText, onPress }) => {
    return (
        <View style={styles.card}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.storeName}>{storeName}</Text>
            <Text style={styles.offer}>{offer}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 170,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 7,
        justifyContent: 'space-between'
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    storeName: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
    },
    offer: {
        fontSize: 18,
        color: '#333',
        fontWeight: '600',
        marginBottom: 15,
        textAlign: 'left',
        width: '70%'
    },
    button: {
        backgroundColor: '#E5F6FF', // Color similar al azul claro
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#00AEEF', // Color del texto del botón
    },
});

export default Cupon;
