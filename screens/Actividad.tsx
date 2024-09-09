import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../App';

type ActividadProps = NativeStackScreenProps<StackScreens, 'Actividad'>;

const Actividad: React.FC<ActividadProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 2</Text>
    </View>
  );
};

export default Actividad;
