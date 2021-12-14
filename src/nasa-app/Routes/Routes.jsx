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
      <Route path="/" element={<App />} />
        <Route path="/nasaUIApp" element={<App />}>
          {!isMobileDevice && (
            <Route
              path="/nasaUIApp"
              element={<Navigate replace to="/nasaUIApp/neo-browse-api" />}
            />
          )}
          <Route path="/nasaUIApp/neo-browse-api" element={<NeoBrowseApiPage />} />
          <Route path="/nasaUIApp/neo-lookup-api" element={<NeoLookupApiPage />} />
          <Route path="/nasaUIApp/neo-feed-api" element={<NeoFeedApiPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
