import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import Nav from "../components/Nav";
import { getTokenDuration } from "../utils/auth";
import classes from "./RootPage.module.css";

function RootPage() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <main className={classes.container}>
      <Nav />
      <Outlet />
    </main>
  );
}

export default RootPage;
