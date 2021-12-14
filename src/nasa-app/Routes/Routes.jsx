import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NotFound from "../../components/NotFound";
import App from "../App";
import NeoBrowseApiPage from "../NeoBrowseApiPage";
import NeoFeedApiPage from "../NeoFeedApiPage";
import NeoLookupApiPage from "../NeoLookupApiPage";
const AppRoutes = () => { 
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 925px)",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {!isMobileDevice && (
            <Route
              path="/"
              element={<Navigate replace to="/neo-browse-api" />}
            />
          )}
          <Route path="/neo-browse-api" element={<NeoBrowseApiPage />} />
          <Route path="/neo-lookup-api" element={<NeoLookupApiPage />} />
          <Route path="/neo-feed-api" element={<NeoFeedApiPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
