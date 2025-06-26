"use client";

import React from "react";
// redux
import { store } from "@store";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function RootLayoutMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const persistor = persistStore(store);
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default RootLayoutMain;
