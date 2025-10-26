import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}
const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

  const isLoding = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoding.current = false;
    }, 200)
  }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoding.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndRached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if (!isEndRached ) return;

    isLoding.current = true;

    console.log('Cargar siguientes películas')

    loadNextPage && loadNextPage();
    

    isLoding.current = false;
    
  }
  return (
    <View className={`${className}`}>
      {title && (
        <Text className="text-2xl font-medium px-4 mb-3 text-white">
          {title}
        </Text>
      )}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        // keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
