# Luis Riveros - Portfolio

Portafolio personal desarrollado con React, TypeScript, Tailwind CSS y Vite. Diseño moderno, responsivo y optimizado para SEO.

## 🚀 Características

- ⚡ **Vite** - Build tool ultrarrápido
- ⚛️ **React 19** - Última versión de React
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🎭 **Radix UI** - Componentes accesibles y sin estilos
- 🌗 **Dark Mode** - Soporte para tema oscuro/claro
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🎯 **TypeScript** - Tipado estático para mayor seguridad
- 📝 **React Hook Form + Zod** - Validación de formularios
- 🔍 **SEO Optimizado** - Meta tags y estructura semántica
- 🔥 **Firebase** - Hosting y Analytics integrados

## 📦 Tecnologías

- React 19.2.0
- TypeScript
- Vite 7.1.12
- Tailwind CSS 4
- Radix UI (Button, Card, Badge, Input, Textarea, Sheet, Form, Label)
- next-themes (gestión de temas)
- React Hook Form + Zod (validación)
- Lucide React (iconos)
- Sonner (notificaciones)
- Firebase (Hosting + Analytics)

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Deploy a Firebase
npm run deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, Projects, Skills, Contact
│   ├── ui/              # Componentes Radix UI
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts         # Funciones utilitarias
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Secciones

1. **Hero** - Introducción con gradient animado y CTAs
2. **About** - Intereses (cards) y experiencia (timeline)
3. **Projects** - Grid de proyectos con hover effects
4. **Skills** - Barras de progreso y badges de tecnologías
5. **Contact** - Formulario con validación

## 🌐 Despliegue

### Deploy en Producción

La aplicación está desplegada en Firebase Hosting:

**🔗 URL en Vivo**: https://luriv-dev.web.app

**📊 Firebase Console**: https://console.firebase.google.com/project/luriv-dev

### Comandos de Deploy

```bash
# Deploy completo (build + firebase deploy)
npm run deploy

# Solo build
npm run build

# Solo deploy (requiere build previo)
firebase deploy --only hosting
```

### Otras Plataformas Compatibles

El proyecto también puede desplegarse en:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Ver [DEPLOY.md](./DEPLOY.md) para instrucciones detalladas de despliegue.

## 📄 Licencia

© 2025 Luis Riveros. Todos los derechos reservados.
