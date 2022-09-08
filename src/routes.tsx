import { Route, Routes as Switch } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Switch>
  );
}
