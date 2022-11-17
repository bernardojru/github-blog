import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Home/components/Profile";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
        </Route>
      </Route>
    </Routes>
  );
}
