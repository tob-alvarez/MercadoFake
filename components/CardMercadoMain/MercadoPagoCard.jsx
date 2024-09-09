import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MercadoPagoCard = () => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => { /* Acción al presionar la tarjeta */ }}>
            {/* Fila de logos */}
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png' }}
                    style={styles.logo}
                />
                <Image
                    source={{ uri: 'https://seeklogo.com/images/M/mercadopago-logo-FC9BA7420E-seeklogo.com.png' }}
                    style={styles.logo2}
                />
            </View>
            <View style={styles.arrowContainer}>
                <Text style={styles.cardText}>Tarjeta Mercado Pago</Text>
                <Text style={styles.arrow}>›</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#2c3039', // Color de fondo similar al de la imagen
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
    },
    logo2: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10,
    },
    cardText: {
        color: '#ffffff', // Color blanco para el texto
        fontSize: 12,
    },
    arrowContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    arrow: {
        color: '#ffffff', // Color blanco para la flecha
        fontSize: 24,
    },
});

export default MercadoPagoCard;
