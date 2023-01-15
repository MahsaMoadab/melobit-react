import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { MusicProvider } from "./context/MusicContext";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="player/details/:songId" element={<Details />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MusicProvider>

  );
}

export default App;
