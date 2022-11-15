import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Home/components/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
