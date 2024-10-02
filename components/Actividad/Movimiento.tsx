import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ejemplo para el ícono

interface MovimientoProps {
    fecha: string;
    icono: JSX.Element;
    nombre: string;
    monto: number;
    aFavor: boolean;
    horario: string;
    estado: string;
}

const Movimiento: React.FC<MovimientoProps> = ({
    fecha,
    icono,
    nombre,
    monto,
    aFavor,
    horario,
    estado,
}) => {
    const montoStyle = {
        color: aFavor ? 'green' : 'black',
        fontWeight: aFavor ? '700' : '300',
    };

    return (
        <View style={styles.movimiento}>
            <Text style={styles.fecha}>{fecha}</Text>
            <View style={styles.detalles}>
                <View style={styles.icono}>{icono}</View>
                <View style={styles.info}>
                    <Text style={styles.nombre}>{nombre}</Text>
                    <Text style={styles.estado}>{estado}</Text>
                </View>
                <Text style={[styles.monto, montoStyle]}>
                    {aFavor ? `+ $${monto.toFixed(2)}` : `- $${monto.toFixed(2)}`}
                </Text>
            </View>
            <View style={styles.montoHorario}>
                <Text style={styles.horario}>{horario}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    movimiento: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
    },
    fecha: {
        fontSize: 12,
        color: '#888',
        marginBottom: 20,
        fontWeight: '500'
    },
    detalles: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icono: {
        width: 50,
        height: 50,
        backgroundColor: '#CCCCCC40',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 5
    },
    info: {
        flex: 1,
        marginLeft: 15
    },
    nombre: {
        fontSize: 16,
        fontWeight: '500',
    },
    estado: {
        fontSize: 14,
        color: '#888',
    },
    montoHorario: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    monto: {
        fontSize: 16,
    },
    horario: {
        fontSize: 12,
        color: '#888',
    },
});

export default Movimiento;
