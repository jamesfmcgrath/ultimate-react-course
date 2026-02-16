import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-4">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll md:overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview className="bg-stone-800 p-4 text-stone-200" />
    </div>
  );
}

export default AppLayout;
