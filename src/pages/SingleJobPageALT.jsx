import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const SingleJobPage = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSingleJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${id}`);
      const data = await response.json();
      setJob(data);
    } catch (error) {
      console.log("error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleJob();
  }, []);

  return loading ? <Spinner loading={loading} /> : <h1>{job.title}</h1>;
};

export default SingleJobPage;
