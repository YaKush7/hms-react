import loader from "../assets/loader2.svg";

const Loader = () => {
  return (
    <div id="root">
      <div className="divLoader">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
