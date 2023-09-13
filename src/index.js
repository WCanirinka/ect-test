import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';

import ECTReactComponent from "./ECTReactComponent";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <HelmetProvider>
    <ECTReactComponent />
  </HelmetProvider>
);
