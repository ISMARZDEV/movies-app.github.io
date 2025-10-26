# DevTools Persistentes - Movies App

## 🎯 Objetivo

Evitar que los devtools se desactiven cada vez que se recarga la aplicación, manteniendo su estado de manera persistente entre sesiones.

## 🔧 Implementación

### 1. Hook Personalizado (`useDevToolsPersistence`)

```typescript
// presentation/hooks/useDevToolsPersistence.tsx
```

Este hook maneja:
- ✅ Estado persistente de React Query DevTools
- ✅ Estado persistente de Network Monitor  
- ✅ Posición de los devtools
- ✅ Carga/guardado automático en AsyncStorage

### 2. DevTools Debugger (`core/utils/devtools-debugger.ts`)

Utilidades para debugging y manejo del estado de devtools:

```javascript
// Desde la consola del debugger/inspector:
clearDevTools()     // Limpiar todo el estado
enableDevTools()    // Habilitar siempre
disableDevTools()   // Deshabilitar todos
resetDevTools()     // Resetear a defaults
logDevTools()       // Ver estado actual
```

### 3. Layout Principal (`app/_layout.tsx`)

- ✅ Integración con hook de persistencia
- ✅ Configuración de herramientas con estado persistente
- ✅ Carga condicional para evitar flickering

## 🚀 Características

### Persistencia Automática
- **AsyncStorage**: El estado se guarda automáticamente
- **Restauración**: Al recargar la app, los devtools mantienen su estado anterior
- **Sin configuración**: Funciona de manera transparente

### DevTools Incluidos
1. **React Query DevTools**
   - Estado abierto/cerrado persistente
   - Posición en pantalla recordada
   - Configuración de panel persistente

2. **Network Monitor**  
   - Estado de apertura persistente
   - Logs de peticiones mantenidos

### Debugging Utilities
- **Comandos globales** disponibles en consola
- **Estado inspeccionable** en cualquier momento
- **Reset automático** para casos problemáticos

## 📝 Uso

### Configuración Automática
Una vez implementado, los devtools:
1. Se cargan con el último estado conocido
2. Guardan automáticamente cualquier cambio
3. Persisten entre recargas de la app

### Debugging Manual
```javascript
// En la consola del inspector/debugger:

// Ver estado actual
logDevTools()

// Resetear si hay problemas
resetDevTools()

// Forzar habilitación
enableDevTools()
```

### Personalización
Para modificar la configuración por defecto, edita:
```typescript
// presentation/hooks/useDevToolsPersistence.tsx
const defaultState = {
  networkOpen: false,        // Estado inicial Network Monitor
  reactQueryOpen: true,      // Estado inicial React Query DevTools  
  position: 'bottom-right',  // Posición por defecto
};
```

## 🐛 Solución de Problemas

### DevTools No Aparecen
```javascript
resetDevTools() // En consola del debugger
```

### Estado Corrupto
```javascript
clearDevTools() // Limpiar todo y empezar de nuevo
```

### Verificar Estado
```javascript
logDevTools() // Ver configuración actual
```

## 📋 Beneficios

1. **Productividad**: No necesitas reabrir devtools constantemente
2. **Persistencia**: Tu configuración se mantiene entre sesiones  
3. **Flexibilidad**: Debugging utilities para casos edge
4. **Transparencia**: Funciona sin intervención manual
5. **Performance**: Carga condicional evita renderizado innecesario

## 🔄 Próximas Mejoras

- [ ] Persistencia de filtros en Network Monitor
- [ ] Configuración de themes persistente
- [ ] Exportar/importar configuración
- [ ] Persistencia de queries específicas de React Query
- [ ] Integración con otros devtools de React Native