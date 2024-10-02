import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider: React.FC = () => {
    return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
        height: 1,              // Altura de la línea
        backgroundColor: '#ccc', // Color de la línea
        width: '100%',          // Ancho completo
        marginVertical: 5,     // Espacio vertical alrededor de la línea (opcional)
    },
});

export default Divider;
