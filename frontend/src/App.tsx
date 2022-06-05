import {
  CurrentLocalization,
  Layout,
  MarkersMap,
  TestPage,
} from "./components";
import { LocalizationsContextProvider } from "./contexts";

function App() {
  return (
    <LocalizationsContextProvider>
      <Layout>
        <TestPage />
        <CurrentLocalization />
        <MarkersMap />
      </Layout>
    </LocalizationsContextProvider>
  );
}

export default App;
