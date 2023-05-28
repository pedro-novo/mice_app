import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./setup/router/layout/layout";
import { Home } from "./modules/home";
import { MousePage } from "./modules/mouse-page";

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<MousePage />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
