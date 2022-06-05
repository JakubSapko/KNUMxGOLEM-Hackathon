import { Layout } from "./components";
import { DashboardPage } from "./components/DashboardPage";
import { LocalizationsContextProvider } from "./contexts";

function App() {
  return (
    <LocalizationsContextProvider>
      <Layout>
        <DashboardPage />
      </Layout>
    </LocalizationsContextProvider>
  );
}

export default App;
