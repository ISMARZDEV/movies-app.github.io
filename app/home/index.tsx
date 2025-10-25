import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {

    const { nowPlayingQuery } = useMovies();



  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(nowPlayingQuery.data, null, 2)}</Text>
    </View>
  )
}

export default HomeScreen