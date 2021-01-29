import "./Error.css";

const Error = () => {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-bg">
              <div />
              <div />
              <div />
            </div>
            <h1>oops!</h1>
            <h2>Error 404 : Page Not Found</h2>
            <a className="noUnderline" href="/">
              Go To HomePage
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
