import { useLocation } from "react-router-dom";
import { Main } from "./components/main/main";
import { AppRoutes } from "./routes/appRoutes";
import { Sidebar } from "./components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";

import { useState } from "react";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = pathname === "/register" || pathname === "/";

  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");

    return savedState ? savedState === "true" : true;
  });

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem("sidebarCollapsed", newState);
  };

  return (
    <>
      {/* Header */}
      {!isAuthPage && (
        <header>
          <h1>Header</h1>
        </header>
      )}

      {/* Sidebar */}
      {!isAuthPage && <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />}
      {/* Main */}
      <Main>
        <AppRoutes />
      </Main>

      {/* Footer */}
      {!isAuthPage && <Footer toggleSidebar={toggleSidebar} />}
    </>
  );
};

export default App;
