### Steps to Fix and Install Shadcn library properly

#### 1. Update `vite.config.js`  
Modify the `vite.config.js` file to include an alias for the `src` directory:  

```javascript
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

#### 2. Update `jsconfig.json`  
Modify the `jsconfig.json` file to set up path aliases:  

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### 3. Remove corrupted Files  
Delete the following from the `vite-project` folder:  
- `component.json` file  
- `components` folder  

#### 4. Initialize `shadcn/ui`  
Run the following command to initialize `shadcn/ui`:  

```sh
npx shadcn@latest init
```

#### 5. Add Components  
You can now start adding UI components:  

- To add an Input component:  
  ```sh
  npx shadcn@latest add input
  ```
- To add a Button component:  
  ```sh
  npx shadcn@latest add button
  ```

Refer to the documentation for more components:  
🔗 [shadcn/ui Documentation](https://ui.shadcn.com/docs/components/accordion)  

#### 6. Start the Project  
Finally, run your project:  

```sh
npm run dev
```
