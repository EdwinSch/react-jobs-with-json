import MainLayout from "./pages/MainLayout";
import Homepage from "./pages/Homepage";
import JobsPage from "./pages/JobsPage";
import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";
import NotFound from "./pages/NotFound";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<SingleJobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
