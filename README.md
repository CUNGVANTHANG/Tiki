## Frontend

### 1. Using

- React + TypeScript + Vite
- Ant Design
- Sass (**Support by**: `normalize.css`, `classnames`)
- Redux Toolkit (**Support by**: `@reduxjs/toolkit`, `react-redux`)
- ReactJS Hook (useState, useEffect, useRef, useSelector, useLocation, useNavigate, useDispatch)

### 2. Config alias `~`

```
$ yarn add vite-tsconfig-paths --save-dev
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```

```json
/* tsconfig.app.json */
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

### 3. Run application

```
$ yarn dev
```

## Backend

### 1. Using

- NestJS + TypeScript
- JWT

## Databases

- MySQL + Docker

## Pages

- Home

## Function
