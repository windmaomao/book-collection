import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BooksPage from "@/pages/books";
import PricingPage from "@/pages/pricing";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path='/' />
      <Route element={<BooksPage />} path='/books' />
      <Route element={<PricingPage />} path='/pricing' />
    </Routes>
  );
}

export default App;
