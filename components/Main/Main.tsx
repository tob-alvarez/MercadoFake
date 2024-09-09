import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MercadoPagoCard from '../CardMercadoMain/MercadoPagoCard';

const Main = () => {

    const [seeMoney, setSeeMoney] = useState(false);

    const handleSee = () => {
        setSeeMoney(!seeMoney)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>Disponible</Text>
                    <View style={styles.porcentaje}>
                        <Entypo name="triangle-up" size={14} color="green" />
                        <Text style={{fontSize: 10, fontWeight: 'bold', color: 'green'}}>37,6%</Text>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.movimientos} onPress={() => alert('hola')}>
                        <Text style={{fontWeight: 'bold', color: '#048ec6'}}>Ir a movimientos</Text>
                        <Entypo name="chevron-small-right" size={18} color="#00abe9" style={{top: 2}} />
                    </Pressable>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 32}}>{seeMoney ? "$15.000" : "****"}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{seeMoney ? "$00" : "**"}</Text>
                <Pressable style={styles.botonojo} onPress={handleSee}> 
                    <Ionicons name={seeMoney? "eye-outline" : "eye-off-outline"} size={20} color="black" />
                </Pressable>
            </View>
            <View style={styles.mensajeVerde}>
                <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'green', borderRadius: 50, alignItems:'center', padding: 3}}>
                    <MaterialIcons name="attach-money" size={14} color="green" />
                </View>
                <Text style={{fontSize: 13}}>Ingresá dinero asi crece mientras lo tenés disponible</Text>
            </View>
            <View style={styles.containerBotones}>
                <View style={styles.botonGris}>
                    <FontAwesome6 name="money-bill" size={20} color="black" />
                    <Text style={{fontSize: 10}}>Ingresar</Text>
                </View>
                <View style={styles.botonGris}>
                    <FontAwesome6 name="money-bill-transfer" size={20} color="black" />
                    <Text style={{fontSize: 10}}>Transferir</Text>
                </View>
                <View style={styles.botonGris}>
                    <MaterialCommunityIcons name="cash-refund" size={20} color="black" />
                    <Text style={{fontSize: 10}}>Sacar</Text>
                </View>
                <View style={styles.botonGris}>
                    <AntDesign name="idcard" size={24} color="black" />
                    <Text style={{fontSize: 10}}>Tu CVU</Text>
                </View>
            </View>
            <MercadoPagoCard/>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: '93%',
        alignSelf: 'center',
        borderRadius: 4,
        height: 380,
        padding: 10,
        shadowColor: '#000',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    porcentaje:{
        flexDirection: 'row',
        paddingHorizontal: 3,
        marginHorizontal: 5,
        backgroundColor: '#b1dfbd80',
        borderRadius: 8,
        alignItems: 'center'
    },
    movimientos:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    botonojo:{
        alignSelf: 'center',
        backgroundColor: '#CCCCCC80',
        borderRadius: 50,
        padding: 5,
        marginLeft: 5
    },
    mensajeVerde:{
        padding: 20,
        marginTop: 20,
        backgroundColor: '#b1dfbd80',
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    containerBotones:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    botonGris:{
        width: 65,
        height: 65,
        backgroundColor: '#CCCCCC40',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 10
    }
})