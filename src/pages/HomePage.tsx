import { Link, useRouteLoaderData } from "react-router-dom";

function HomePage() {
  const token = useRouteLoaderData("root") as string | undefined;
  console.log(token);
  return (
    <div id="home-page">
      <h1>Home page</h1>
      <p>Welcome to Hedgehog User Management!</p>
      {!token && (
        <p>
          <Link to="/login">Log in</Link> or{" "}
          <Link to="/register">register</Link>
        </p>
      )}
    </div>
  );
}

export default HomePage;
