import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

type HeaderProps = {
    username: string;
    notifications: number;
    onHelpPress: () => void;
    onNotificationsPress: () => void;
};

const Header: React.FC<HeaderProps> = ({ username, notifications, onHelpPress, onNotificationsPress }) => {
    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.userSection}>
                    <Icon name="person-circle-outline" size={30} color="#fff" />
                    <Text style={styles.username}>Hola, {username}</Text>
                </View>
                <View style={styles.iconSection}>
                    <TouchableOpacity onPress={onNotificationsPress} style={styles.notificationContainer}>
                        <Icon name="notifications-outline" size={28} color="#fff" />
                        {notifications > 0 && (
                            <View style={styles.notificationBadge}>
                                <Text style={styles.badgeText}>{notifications}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onHelpPress} style={styles.helpButton}>
                        <Icon name="help-circle-outline" size={20} color="#FFFFFF" />
                        <Text style={styles.helpText}>Ayuda</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    iconSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationContainer: {
        position: 'relative',
        marginRight: 20,
    },
    notificationBadge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
    },
    helpButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3F2FD30',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'center'
    },
    helpText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 5,
    },
});

export default Header;
