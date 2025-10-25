import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import React from "react";
import "./global.css"; // Importar estilos de NativeWind

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

const RootLayout = () => {
  nowPlayingAction();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
