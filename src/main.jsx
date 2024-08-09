import "./index.css"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import ReduxProvider from "./components/provider/redux-provider"
import { ThemeProvider } from "./components/provider/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { router } from "./router/index.router.jsx"

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="light" storageKey="react-theme">
    <ReduxProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ReduxProvider>
  </ThemeProvider>,
)
