import MainLayout from "./pages/MainLayout";
import Homepage from "./pages/Homepage";
import JobsPage from "./pages/JobsPage";
import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFound from "./pages/NotFound";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  // Add New Job to server - passing from add job page
  const addJob = async (newJob) => {
    // console.log(newJob);
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job from server
  const deleteJob = async (id) => {
    // console.log("delete", id);
    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Edit/Update Job on server
  const updateJob = async (job) => {
    // console.log(newJob);
    const response = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<SingleJobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
