import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigte = useNavigate();

  function navigationHandler() {
    navigte("/product");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/product">Product</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>
          Go to Product Programmitacally
        </button>
      </p>
    </>
  );
}

export default HomePage;
