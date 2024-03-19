import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllBtn from "../components/ViewAllBtn";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllBtn />
    </>
  );
};

export default Homepage;
