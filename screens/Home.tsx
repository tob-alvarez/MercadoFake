import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../App';
import Header from '../components/Header/Header';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Main from '../components/Main/Main';
import Accesos from '../components/Accesos/Accesos';

type HomeProps = NativeStackScreenProps<StackScreens, 'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simula la carga de nuevos datos
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <LinearGradient
      colors={['#048ec6', '#FFFFFF']}
      style={styles.background}
      end={ {x : 0.5, y : 0.5}}
      >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#0000ff']} // Cambia el color del spinner
            tintColor="#0000ff" // Color del indicador en iOS
          />
        }
      >
        <Header
          username="Tobias"
          notifications={1}
          onHelpPress={() => alert('Ayuda presionada')}
          onNotificationsPress={() => alert('Notificaciones presionadas')}
        />
        <Main/>
        <Accesos/>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})

