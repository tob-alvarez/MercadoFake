import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../App';

type BeneficiosProps = NativeStackScreenProps<StackScreens, 'Beneficios'>;

const Beneficios: React.FC<BeneficiosProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 3</Text>
    </View>
  );
};

export default Beneficios;
