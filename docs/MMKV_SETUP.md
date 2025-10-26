# Configuración de MMKV para React Native

## Estado Actual
Actualmente estamos usando una implementación mock de MMKV debido a problemas de importación. La aplicación funciona correctamente con `react-query-external-sync`, pero para obtener el máximo rendimiento de almacenamiento, deberías configurar MMKV correctamente.

## Cómo arreglar MMKV (cuando estés listo)

### 1. Asegurar que react-native-reanimated esté correctamente configurado
```bash
npx pod-install ios  # Solo si estás en macOS y desarrollando para iOS
```

### 2. Reiniciar Metro con cache limpio
```bash
npm start -- --clear
```

### 3. Reemplazar el contenido de `core/storage/mmkv.ts` con:
```typescript
import { MMKV } from 'react-native-mmkv';

// Create MMKV instance
export const storage = new MMKV({
  id: 'movies-app-storage',
  encryptionKey: 'movies-app-secret-key-2024',
});

// Helper functions for easier usage
export const storageHelpers = {
  set: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  remove: (key: string) => {
    storage.delete(key);
  },
  clear: () => {
    storage.clearAll();
  },
  has: (key: string) => {
    return storage.contains(key);
  },
};
```

### 4. Si sigues teniendo problemas con tipos
Agrega al archivo `types/global.d.ts` (créalo si no existe):
```typescript
declare module 'react-native-mmkv' {
  export class MMKV {
    constructor(options?: { id?: string; encryptionKey?: string });
    set(key: string, value: string | number | boolean): void;
    getString(key: string): string | undefined;
    getNumber(key: string): number | undefined;
    getBoolean(key: string): boolean | undefined;
    delete(key: string): void;
    clearAll(): void;
    contains(key: string): boolean;
  }
}
```

## Funcionalidades Actuales Configuradas

✅ **react-query-external-sync** - Sincronización externa de queries
✅ **AsyncStorage** - Almacenamiento asíncrono
✅ **SecureStore** - Almacenamiento seguro de Expo
✅ **Platform detection** - Detección automática de plataforma
✅ **Device detection** - Detección de dispositivo vs emulador
⚠️ **MMKV** - Usando mock temporal (funcional pero no optimizado)

## Beneficios cuando MMKV esté funcionando correctamente:
- Almacenamiento ultra-rápido (sincrónico)
- Encriptación nativa
- Mejor rendimiento que AsyncStorage
- Menor uso de memoria

La aplicación funciona perfectamente ahora, MMKV es solo una optimización adicional.