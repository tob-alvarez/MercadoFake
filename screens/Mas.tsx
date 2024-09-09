import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../App';

type MasProps = NativeStackScreenProps<StackScreens, 'Mas'>;

const Mas: React.FC<MasProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 4</Text>
    </View>
  );
};

export default Mas;
