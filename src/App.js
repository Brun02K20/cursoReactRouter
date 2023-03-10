// importo los elementos necesarios de la libreria react-router-dom en el componente principal de la aplicacion 
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';

// importo los componentes creados
import { HomePage } from "./components/HomePage/HomePage.js";
import { BlogPage } from "./components/BlogPage/BlogPage.js";
import { ProfilePage } from "./components/ProfilePage/ProfilePage.js";
import { BlogPost } from "./components/BlogPost/BlogPost.js";
import { LoginPage } from "./components/LoginPage/LoginPage.js";
import { LogoutPage } from "./components/LogoutPage/LogoutPage.js";
import { AuthProvider, AuthRoute, useAuth  } from "./auth";

import { Menu } from "./components/Menu/Menu.js";

// hash router es un provider, como lo del react context. Adentro de este proveedor ponemos lo que queramos que vaya en todas las rutas. Por ejemplo un menu, un footer, etc

// dentro de element llamamos el componente que queremos renderizar

// el path=* hace referencia a "todas las rutas que no hayan sido definidas anteiorrmente". Por lo tanto debe ir al final de la lista de Routes
function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          
          <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/blog" element={< BlogPage />}>
              <Route path=":slug" element={< BlogPost />} />
            </Route >
            
            <Route path="/login" element={< LoginPage />} />
            <Route 
              path="/logout" 
              element={
                <AuthRoute>
                  < LogoutPage />
                </AuthRoute>
              } 
            />

            {/* Solucion 2 */}
            <Route 
              path="/profile" 
              element={
                <AuthRoute>
                  < ProfilePage />
                </AuthRoute>
              } 
            />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider> 
      </HashRouter>
    </>
  );
}

export default App;
