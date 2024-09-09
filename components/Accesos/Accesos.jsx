import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Accesos = () => {
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
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
    }
})