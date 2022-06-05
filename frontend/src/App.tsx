import {
  CurrentLocalization,
  Layout,
  MarkersMap,
  TestPage,
} from "./components";
import { FetchTest } from "./components/FetchTest";
import { LocalizationsContextProvider } from "./contexts";

function App() {
  return (
    <LocalizationsContextProvider>
      <Layout>
        <TestPage />
        <FetchTest />
        <CurrentLocalization />
        <MarkersMap />
      </Layout>
    </LocalizationsContextProvider>
  );
}

export default App;
