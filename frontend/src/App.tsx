import { Layout } from "./components";
import { TestChart } from "./components/TestChart";
import { TestMap } from "./components/TestMap";
import { TestPage } from "./components/TestPage";

function App() {
  return (
    <Layout>
      <TestPage />
      {/* <TestChart /> */}
      <TestMap />
    </Layout>
  );
}

export default App;
