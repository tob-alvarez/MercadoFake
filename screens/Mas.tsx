import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../App';
import Config from '../components/Configuracion/Config';

type MasProps = NativeStackScreenProps<StackScreens, 'Mas'>;

const Mas: React.FC<MasProps> = ({ navigation }) => {
  return (
      <Config/>
  );
};

export default Mas;
