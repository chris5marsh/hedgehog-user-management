import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div id="home-page">
      <h1>Home page</h1>
      <p>
        <Link to="/auth?mode=login">Log in</Link> or{" "}
        <Link to="/auth?mode=register">register</Link>
      </p>
    </div>
  );
}
