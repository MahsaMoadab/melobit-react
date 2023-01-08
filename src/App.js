import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="seach" element={<Search />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
