import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Accesos = () => {
    return (
        <View style={styles.container}>
            <View style={styles.accesosContainer}>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <MaterialCommunityIcons name="ballot-outline" size={24} color="#048ec6" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 50, textAlign: 'center'}}>Cuentas y Servicios</Text>
                </View>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="#048ec6" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 50, textAlign: 'center'}}>Recargar Celular</Text>
                </View>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                            <FontAwesome5 name="bus" size={24} color="#048ec6" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 50, textAlign: 'center'}}>Cargar Trasnporte</Text>
                </View>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <FontAwesome5 name="satellite-dish" size={24} color="#048ec6" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 50, textAlign: 'center'}}>Recargar DIRECTV</Text>
                </View>
            </View>
            <View style={styles.accesosContainer}>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <MaterialIcons name="payments" size={24} color="#00509d" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 50, textAlign: 'center'}}>Cobrar con Point</Text>
                </View>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <MaterialCommunityIcons name="link-box-variant-outline" size={24} color="#00509d" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 60, textAlign: 'center'}}>Cobrar con link de pago</Text>
                </View>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <MaterialCommunityIcons name="gift-outline" size={24} color="#d6ba1c" />
                    </Pressable>
                    <Text style={{fontSize: 10, width: 60, textAlign: 'center'}}>Recomendar la app</Text>
                </View>
                <View style={styles.botonContenedor}>
                    <Pressable style={styles.botonAcceso}>
                        <Text style={{fontSize: 26}}>+</Text>
                    </Pressable>
                    <Text style={{fontSize: 10, width: 50, textAlign: 'center'}}>Ver más</Text>
                </View>
            </View>
        </View>
    )
}

export default Accesos

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        width: '93%',
        alignSelf: 'center',
        borderRadius: 4,
        height: 250,
        padding: 10,
        shadowColor: '#000',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
        marginVertical: 30
    },
    botonContenedor:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    botonAcceso:{
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 10,
        borderWidth: .8,
        borderColor: '#dddddd',
        flexDirection: 'column'
    },
    accesosContainer:{
        flexDirection: 'row',
        gap: 20,
        padding: 10,
        justifyContent: 'center'
    }
})