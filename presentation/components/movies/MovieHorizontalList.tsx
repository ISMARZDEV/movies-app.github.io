import Movieclapp from "@/assets/icons/Movieclapp";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";
import Popcorn from "@/assets/icons/Popcorn";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
  icon?: "movieclapp" | "popcorn";
}
const MovieHorizontalList = ({
  movies,
  title,
  className,
  loadNextPage,
  icon,
}: Props) => {
  const isLoding = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoding.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoding.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndRached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndRached) return;

    isLoding.current = true;

    console.log("Cargar siguientes películas");

    loadNextPage && loadNextPage();

    isLoding.current = false;
  };
  return (
    <View className={`${className}`}>
      <View className="px-3 mb-3 flex-row gap-3">
        {icon === "movieclapp" && <Movieclapp width={20} height={25} />}

        {icon === "popcorn" && <Popcorn width={20} height={25} />}

        {title && (
          <Text className="text-2xl font-medium text-white">{title}</Text>
        )}
      </View>
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
