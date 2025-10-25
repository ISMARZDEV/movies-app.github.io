import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}
const MovieHorizontalList = ({ movies, title, className }: Props) => {
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
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
