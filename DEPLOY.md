# Guía de Despliegue en Firebase

## 📋 Requisitos Previos

- Node.js instalado
- Cuenta de Firebase
- Firebase CLI instalado

## 🚀 Configuración Inicial

### 1. Login en Firebase

```bash
npm run firebase:login
```

O directamente:
```bash
firebase login
```

### 2. Verificar Proyecto

El proyecto ya está configurado para usar `luriv-dev`. Verifica la configuración:

```bash
firebase projects:list
```

## 🔧 Configuración del Proyecto

### Archivos de Configuración

- **firebase.json**: Configuración de hosting
  - Public directory: `dist`
  - Rewrites para SPA
  - Headers de cache para assets

- **.firebaserc**: ID del proyecto (`luriv-dev`)

- **src/lib/firebase.ts**: Configuración de Firebase SDK
  - Analytics habilitado
  - Configuración del proyecto luriv-dev

## 📦 Build y Deploy

### Build Local

```bash
npm run build
```

Esto genera la carpeta `dist/` con los archivos optimizados.

### Preview Local

```bash
npm run preview
```

### Deploy a Firebase

```bash
npm run deploy
```

O paso por paso:
```bash
# 1. Build
npm run build

# 2. Deploy
firebase deploy
```

### Deploy Solo Hosting

```bash
firebase deploy --only hosting
```

## 🌐 URLs

Después del deploy, tu app estará disponible en:

- **Hosting URL**: https://luriv-dev.web.app
- **Firebase Console**: https://console.firebase.google.com/project/luriv-dev

## 🔍 Comandos Útiles

```bash
# Ver proyectos de Firebase
firebase projects:list

# Cambiar de proyecto
firebase use luriv-dev

# Ver información del proyecto actual
firebase projects:list

# Ver logs de deploy
firebase hosting:channel:list

# Deploy a un canal de preview
firebase hosting:channel:deploy preview

# Ver uso de Firebase
firebase projects:list
```

## 📊 Analytics

Firebase Analytics está configurado y se inicializa automáticamente en navegadores.

Para ver analytics:
1. Ve a Firebase Console
2. Selecciona el proyecto `luriv-dev`
3. Ve a Analytics > Dashboard

## 🐛 Troubleshooting

### Error: No project active

```bash
firebase use luriv-dev
```

### Error: Permission denied

```bash
firebase login --reauth
```

### Build falla

Verifica que todas las dependencias estén instaladas:
```bash
npm install
```

### Deploy falla

Verifica que el build se completó:
```bash
ls -la dist/
```

## 📝 Notas

- El proyecto usa Vite como bundler
- El output se genera en `dist/`
- Los archivos estáticos se cachean por 1 año
- Las rutas usan SPA rewrites a `/index.html`

## 🔐 Seguridad

- Las API keys de Firebase están en el código (es seguro para web apps)
- Las reglas de seguridad se manejan en Firebase Console
- No incluyas secretos de backend en el código frontend
