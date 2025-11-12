import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import React, { useEffect } from "react";
import "./global.css";

import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { storage } from "@/core/storage/mmkv";
import { FloatingDevTools } from "@react-buoy/core";
import { NetworkModal } from "@react-buoy/network";
import { ReactQueryDevToolsModal } from "@react-buoy/react-query";
import { Globe, ReactQueryIcon } from "@react-buoy/shared-ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ExpoDevice from "expo-device";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Platform, Text } from "react-native";
import { useSyncQueriesExternal } from "react-query-external-sync";
import { useSyncQueries } from "tanstack-query-dev-tools-expo-plugin";

const queryClient = new QueryClient();

// Configuración de herramientas de desarrollor
const TOOLS = [
  {
    id: "network",
    name: "NETWORK",
    description: "Network request logger",
    slot: "both" as const,
    icon: ({ size }: { size: number }) => <Globe size={size} color="#38bdf8" />,
    component: NetworkModal,
    props: {
      autoCapture: true,
      captureConsole: true,
    },
  },
  {
    id: "query",
    name: "REACT QUERY",
    description: "React Query inspector",
    slot: "both" as const,
    icon: ({ size }: { size: number }) => (
      <ReactQueryIcon size={size} colorPreset="red" />
    ),
    component: ReactQueryDevToolsModal,
    props: { queryClient },
  },
];

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
};

const AppContent = () => {
  useSyncQueriesExternal({
    queryClient,
    socketURL: "http://localhost:42831",
    deviceName: Platform?.OS || "web",
    platform: Platform?.OS || "web",
    deviceId: Platform?.OS || "web",
    isDevice: ExpoDevice.isDevice,
    extraDeviceInfo: {
      appVersion: "1.0.0",
    },
    enableLogs: false,
    envVariables: {
      NODE_ENV: process.env.NODE_ENV,
    },
    mmkvStorage: storage,
    asyncStorage: AsyncStorage,
    secureStorage: SecureStore,
    secureStorageKeys: [
      "userToken",
      "refreshToken",
      "biometricKey",
      "deviceId",
    ],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      nowPlayingAction();
      popularMoviesAction();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useSyncQueries({ queryClient });

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <FloatingDevTools
        apps={TOOLS}
        actions={{}}
        environment="local"
        userRole="admin"
      />
    </>
  );
};

export default RootLayout;
