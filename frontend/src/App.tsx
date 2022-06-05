import { Layout, MarkersMap } from "./components";
import { TestPage } from "./components/TestPage";
import { LocalizationsContextProvider } from "./contexts";

function App() {
  return (
    <LocalizationsContextProvider>
      <Layout>
        <TestPage />
        <MarkersMap />
      </Layout>
    </LocalizationsContextProvider>
  );
}

export default App;
