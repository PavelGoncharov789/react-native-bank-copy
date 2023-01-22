import React from "react";

import { TailwindProvider } from "tailwind-rn";

import Navigation from "./app/navigation/Navigation";
import { AuthProvider } from "./app/providers/authProvider";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <AuthProvider>
      <TailwindProvider utilities={utilities}>
        <Navigation />
      </TailwindProvider>
    </AuthProvider>
  );
}
