import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, FontAwesome,Feather, Ionicons, AntDesign } from '@expo/vector-icons';

const Config = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
                    <View style={{backgroundColor: 'white', padding: 5, borderRadius: 50}}>
                        <Feather name="user" size={24} color="black" />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.profileName}>Tobias</Text>
                        <Text style={styles.profileLink}>Tu perfil &gt;</Text>
                    </View>
                </View>
            {/* Card Mercado Libre */}
                <View style={styles.card}>
                    <TouchableOpacity style={styles.cardButton}>
                        <Image
                            source={{ uri: 'https://1000marcas.net/wp-content/uploads/2021/08/Mercado-Libre-Logo-2013.png' }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Mercado Libre</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Menu items */}
            <View style={styles.menuItem}>
                <Ionicons name="home-outline" size={20} color="black" />
                <Text style={styles.menuText}>Inicio</Text>
            </View>

            <View style={styles.menuItem}>
                <Ionicons name="notifications-outline" size={20} color="black" />
                <Text style={styles.menuText}>Notificaciones</Text>
                <View style={styles.notificationBadge}>
                    <Text style={styles.notificationText}>1</Text>
                </View>
            </View>

            <View style={styles.menuItem}>
                <MaterialIcons name="help-outline" size={20} color="black" />
                <Text style={styles.menuText}>Ayuda</Text>
            </View>

            <View style={styles.menuItem}>
                <AntDesign name="wallet" size={20} color="black" />
                <Text style={styles.menuText}>Tu dinero</Text>
            </View>

            <View style={styles.menuItem}>
                <AntDesign name="creditcard" size={20} color="black" />
                <Text style={styles.menuText}>Tarjetas</Text>
            </View>

            <View style={styles.menuItem}>
                <Feather name="bar-chart" size={20} color="black" />
                <Text style={styles.menuText}>Actividad</Text>
            </View>

            <View style={styles.menuItem}>
                <AntDesign name="gift" size={20} color="black" />
                <Text style={styles.menuText}>Invitá y ganá</Text>
                <View style={styles.newBadge}>
                    <Text style={styles.badgeText}>NUEVO</Text>
                </View>
            </View>

            {/* More menu items */}
            <View style={styles.menuItem}>
                <MaterialCommunityIcons name="hand-coin-outline" size={20} color="black" />
                <Text style={styles.menuText}>Préstamos</Text>
            </View>

            <View style={styles.menuItem}>
                <MaterialCommunityIcons name="piggy-bank-outline" size={20} color="black" />
                <Text style={styles.menuText}>Reservas</Text>
            </View>

            <View style={styles.menuItem}>
                <MaterialIcons name="security" size={24} color="black" />
                <Text style={styles.menuText}>Seguros y garantías</Text>
            </View>

            <View style={styles.menuItem}>
                <MaterialCommunityIcons name="star-circle-outline" size={20} color="black" />
                <Text style={styles.menuText}>Suscripciones</Text>
            </View>

            {/* Footer Section */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Acerca de Mercado Pago</Text>
            </View>
        </ScrollView>
    );
};

export default Config;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    profileContainer: {
        padding: 20,
        backgroundColor: '#00aaff',
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    profileLink: {
        color: 'white',
        fontSize: 14,
    },
    card: {
        backgroundColor: '#e5f6fd70',
        padding: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    cardText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    menuText: {
        fontSize: 16,
        marginLeft: 20,
    },
    notificationBadge: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 5,
        marginLeft: 'auto',
    },
    notificationText: {
        color: 'white',
        fontSize: 12,
    },
    newBadge: {
        backgroundColor: '#048ec6',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 1,
        marginLeft: 'auto',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    footer: {
        padding: 20,
    },
    footerText: {
        color: 'black',
        fontSize: 16,
    },
});
