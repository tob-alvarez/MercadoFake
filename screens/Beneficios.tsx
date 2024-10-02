import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground, Pressable, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../App';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Cupon from '../components/Beneficio/Cupon';

type BeneficiosProps = NativeStackScreenProps<StackScreens, 'Beneficios'>;
interface SliderItemProps {
  image: any;
}

const DATA = [
  {
    id: '1',
    image: require('../assets/fondocard1.png')
  },
  {
    id: '2',
    image: require('../assets/fondocard2.png')
  },
  {
    id: '3',
    image: require('../assets/fondocard3.png')
  },
  {
    id: '4',
    image: require('../assets/fondocard4.png')
  },
];

const filtrosData = [
  'Todas',
  'Categorias',
  'Cuotas sin interés',
  'Descuentos',
  'Código QR',
  'Tiendas online',
  'Mercado Libre',
];

const SliderItem: React.FC<SliderItemProps> = ({ image }) => {
  return (
    <ImageBackground
      source={image} 
      style={styles.containerCard}
      resizeMode='contain'
    >
    </ImageBackground>
  );
};

const Beneficios: React.FC<BeneficiosProps> = ({ navigation }) => {

  const [filtroSeleccionado, setFiltroSeleccionado] = useState<string[]>([]);

  // Función que añade o elimina un filtro del estado
  const toggleFiltro = (filtro: string) => {
    setFiltroSeleccionado((prev) =>
      prev.includes(filtro) ? prev.filter((f) => f !== filtro) : [...prev, filtro]
    );
  };

  const isFiltroSeleccionado = (filtro: string) => {
    return filtroSeleccionado.includes(filtro);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{flexGrow: 0}}
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <SliderItem 
            image={item.image}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={360} // Ajusta el valor según el ancho de tu tarjeta
        contentContainerStyle={styles.slider}
      />
      <View style={styles.containerSubtitulo}>
        <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="black" />
        <Text style={styles.Subtitulo}>Descrubrí todas tus promociones</Text>
      </View>
      <FlatList
        data={filtrosData}
        style={{flexGrow: 0, marginTop: 10, paddingHorizontal: 10}}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => toggleFiltro(item)}
            style={[
              styles.botonFiltro,
              isFiltroSeleccionado(item) && styles.botonFiltroSelected,
            ]}
          >
            <Text style={{ fontSize: 12, color: isFiltroSeleccionado(item) ? '#00aaff' : 'black' }}>
              {item}
            </Text>
            {isFiltroSeleccionado(item) && (
              <Feather name="check" size={14} color="#00aaff" style={{ marginLeft: 5 }} />
            )}
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false} // Oculta el indicador de scroll
        contentContainerStyle={{ paddingHorizontal: 5 }} // Estilo para darle algo de espacio
      />
      <View style={{paddingHorizontal: 20, marginTop: 10,}}>
        <Text style={{fontWeight: '300'}}>280 beneficios disponibles</Text>
      </View>
        <ScrollView contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <Cupon
          logo={require('../assets/nike-logo.png')}
          storeName="Nike"
          offer="3 cuotas sin interés"
          buttonText="MERCADO CRÉDITO"
          onPress={() => console.log('Nike Offer pressed')}
        />
        <Cupon
          logo={require('../assets/changomas-logo.png')}
          storeName="Changomas"
          offer="20% OFF"
          buttonText="CÓDIGO QR"
          onPress={() => console.log('Changomas Offer pressed')}
        />
      </ScrollView>
    </View>
  );
};

export default Beneficios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#CCCCCC40',
  },
  slider: {
    paddingHorizontal: 10,
  },
  containerCard: {
    width: 360,
    marginRight: 10,
    borderRadius: 20,
    height: 160,
    shadowColor: '#000',
    borderColor: '#ccc',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  containerSubtitulo: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center'
  },
  Subtitulo:{
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '500'
  },
  botonFiltro: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginVertical: 5,
    marginRight: 10, // Esto crea espacio entre los botones
    borderRadius: 20,
    height: 30,
    backgroundColor: '#fff'
  },
  botonFiltroSelected: {
    borderColor: '#00aaff',
  },
})