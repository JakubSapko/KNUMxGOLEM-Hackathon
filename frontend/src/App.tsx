import {
  CurrentLocalization,
  Layout,
  MarkersMap,
  TestPage,
} from "./components";
import { DashboardPage } from "./components/DashboardPage";
import { FetchTest } from "./components/FetchTest";
import { LocalizationsContextProvider } from "./contexts";

function App() {
  return (
    <LocalizationsContextProvider>
      <Layout>
        <DashboardPage />
        {/* <TestPage />
        <FetchTest />
        <CurrentLocalization />
        <MarkersMap /> */}
      </Layout>
    </LocalizationsContextProvider>
  );
}

export default App;
