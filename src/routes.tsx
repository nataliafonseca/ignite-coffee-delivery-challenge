import { Route, Routes as Switch } from "react-router-dom";

import { HomePage } from "./pages/HomePage";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
    </Switch>
  );
}
