import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Movimiento from '../components/Actividad/Movimiento';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const filtrosData = [
  'Transferencias',
  'Pagos',
  'Ingresos de dinero',
  'Compras',
  'Servicios',
  'Inversiones',
];

const Actividad: React.FC = () => {
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
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="gray" style={{ position: 'absolute', left: 10 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscá por producto, monto y más"
        />
        <Pressable onPress={() => { }} style={{borderWidth: 1, borderRadius: 50, padding: 5, borderColor: '#ccc'}}>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
      </View>
      <FlatList
        data={filtrosData}
        style={{flexGrow: .1}}
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
            <Text style={{ fontSize: 14, color: isFiltroSeleccionado(item) ? '#00aaff' : 'black' }}>
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

      {/* Scrollable transaction list */}
      <ScrollView>
        {/* mostrar una vez filtrado */}
        {/* <Text style={styles.resultText}>123 resultados</Text> */}
        <Movimiento 
          fecha="14 de septiembre"
          icono={<FontAwesome6 name="money-bill-transfer" size={20} color="black" />}
          nombre="Federico Ignacio Jimenez"
          monto={9000.00}
          aFavor={false}
          horario="16:39"
          estado="Dinero disponible"
        />
        <Movimiento 
          fecha="14 de septiembre"
          icono={<FontAwesome6 name="money-bill-transfer" size={20} color="black" />}
          nombre="Tobias Santiago Alvarez"
          monto={8000.00}
          aFavor={true}
          horario="16:36"
          estado="Dinero disponible"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 3,
    paddingLeft: 40,
    marginRight: 8,
    borderRadius: 20,
    width: '85%',
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
    height: 40
  },
  botonFiltroSelected: {
    borderColor: '#00aaff',
  },
  resultText: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default Actividad;
