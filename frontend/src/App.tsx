import {
  CurrentLocalization,
  Layout,
  MarkersMap,
  TestPage,
} from "./components";
import { FetchTest, PostTest } from "./components/FetchTest";
import { LocalizationsContextProvider } from "./contexts";

function App() {
  return (
    <LocalizationsContextProvider>
      <Layout>
        <TestPage />
        <PostTest />
        <CurrentLocalization />
        <MarkersMap />
      </Layout>
    </LocalizationsContextProvider>
  );
}

export default App;
