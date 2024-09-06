## Frontend

### 1. Using

- React + TypeScript + Vite
- Ant Design
- Sass (**Support by**: `normalize.css`, `classnames`)
- Redux Toolkit (**Support by**: `@reduxjs/toolkit`, `react-redux`)
- ReactJS Hook (useState, useEffect, useRef, useSelector, useLocation, useNavigate, useDispatch)

### 2. Config 
### 2.1. alias `~`

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

```
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

### 2.2. Firebase

```
$ yarn add firebase@8.10.1
```

```ts
const firebaseConfig = {
  apiKey: "AIzaSyCIrq3jrqeSHOOC-J_g31FLbHh9fhRXtTo",
  authDomain: "chat-app-ca301.firebaseapp.com",
  projectId: "chat-app-ca301",
  storageBucket: "chat-app-ca301.appspot.com",
  messagingSenderId: "365404581577",
  appId: "1:365404581577:web:4d0135bfb9eb4819852718",
  measurementId: "G-E5G4FTZGEC"
};
```

- Go to the **Authentication** section in firebase

<img src="https://github.com/user-attachments/assets/5fde0fd5-9f28-4970-8c3d-d4c8e5f33817" width="500px" >

Next we go to https://developers.facebook.com/, then create the application. After creating, go to **Application Settings** ➙ **Basic Information**

<img src="https://github.com/user-attachments/assets/44af4ce8-287e-43f3-b3f2-8c4ec2592c8f" width="300px" >

<img src="https://github.com/user-attachments/assets/5a6293a8-c618-437e-9946-33d2f4759178" width="600px" >

Once done, go get the **Application ID** and **Application Secret Key** and paste it here

<img src="https://github.com/user-attachments/assets/c6ab3011-d501-474a-b9f3-8c71a3e1c14f" width="500px" >

Also copy this URI. Go to **Use Cases** to edit

<img src="https://github.com/user-attachments/assets/35e0a68d-e267-4c61-95fe-f827be2e6308" width="500px" >

<img src="https://github.com/user-attachments/assets/9f6b706b-809e-43d6-852c-50dda7b95eb3" width="400px" >

Go to **Valid OAuth redirect URI** and paste it

<img src="https://github.com/user-attachments/assets/0def4d3a-7770-4f74-9b5b-f0146d4d92d8" width="500px" >

When it displays like this, it is **successful**

<img src="https://github.com/user-attachments/assets/41e053a8-cb1c-4d64-ab78-2817f4487f94" width="300px" >

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
- Category
- Search
