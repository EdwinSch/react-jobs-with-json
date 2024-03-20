// import testData from "../local-testdata.json";
import { useEffect, useState } from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  //--- Work with local test data
  // const jobsData = isHome ? testData.slice(0, 3) : testData;

  //--- work with JSON server
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    //Determine data length in URL with replaced path from config
    const url = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobsData(data);
    } catch (error) {
      console.log("error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center capitalize">
          {isHome ? "latest jobs" : "all jobs"}
        </h2>

        {/* Loader */}
        {loading && <Spinner loading={loading} />}
        {/* Map Jobs*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobsData.map((job) => {
            return <Job key={job.id} {...job} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
