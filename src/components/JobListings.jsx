import jobsData from "../jobs.json";
import Job from "./Job";

const JobListings = ({ isHome = false }) => {
  const jobsOverview = isHome ? jobsData.slice(0, 3) : jobsData;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center capitalize">
          {isHome ? "recent jobs" : "all jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Map Jobs*/}
          {jobsOverview.map((job) => {
            return <Job key={job.id} {...job} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
