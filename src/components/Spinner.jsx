import ClipLoader from "react-spinners/ClipLoader";

const overrideStyle = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={overrideStyle}
      size={100}
    />
  );
};

export default Spinner;
