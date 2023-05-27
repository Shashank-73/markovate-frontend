import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { defaultRoutes } from "./common/routes/default.routes";

import AuthProvider from "./store/Auth/Auth.provider";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {defaultRoutes.map((route) => {
          if (route.isLayout) {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <Suspense fallback="loading">{route.component} </Suspense>
                }
              >
                {route.children?.map((childRoute) => {
                  return (
                    <Route
                      key={childRoute.id}
                      element={
                        <Suspense fallback="...loading">
                          {childRoute.component}
                        </Suspense>
                      }
                      path={childRoute.path}
                    />
                  );
                })}
              </Route>
            );
          }
          return (
            <Route
              key={route.id}
              element={
                <Suspense fallback="...loading">{route.component}</Suspense>
              }
              path={route.path}
            />
          );
        })}
      </Routes>
    </AuthProvider>
  );
};

export default App;
