import { useLocation } from "react-router-dom";
import { Main } from "./components/main/main";
import { AppRoutes } from "./routes/appRoutes";

import { Footer } from "./components/footer/footer";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      {/* Header */}
      {pathname === "/register" || pathname === "/" ? null : (
        <header>
          <h1>Header</h1>
        </header>
      )}

      {/* Main */}
      <Main>
        <AppRoutes />
      </Main>

      {/* Footer */}
      {pathname === "/register" || pathname === "/" ? null : <Footer />}
    </>
  );
};

export default App;
