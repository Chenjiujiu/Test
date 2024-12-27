/**
 * @format
 * HomeScreen
 */

import { Text, View } from 'react-native';
import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC<any> = memo(() => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Me')
  }
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
        <Text onPress={handlePress}>go me</Text>
      </View>
    </SafeAreaView>
  );
});

export default HomeScreen;
