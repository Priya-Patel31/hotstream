import {
  Home,
  HeroSection,
  Route,
  Routes,
  ToastContainer,
  Explore,
  WatchLater,
  WithHeader,
  Mockman,
  History,
  Playlists,
  Likes,
  Login,
  Signup,
  useAuth,
  Modal,
  PlaylistVideos,
  PageNotFound,
  PrivateRoute,
} from "./appImports";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const { isUserLoggedIn } = useAuth();
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Modal />
      <Routes>
        <Route path="mockApi" element={<Mockman />}></Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<WithHeader />}>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<HeroSection />} />
            <Route path="explore" element={<Explore />} />
            <Route
              path="watchlater"
              element={
                <PrivateRoute>
                  <WatchLater />
                </PrivateRoute>
              }
            />
            <Route
              path="playlists"
              element={
                <PrivateRoute>
                  <Playlists />
                </PrivateRoute>
              }
            />
            <Route
              path="likes"
              element={
                <PrivateRoute>
                  <Likes />
                </PrivateRoute>
              }
            />
            <Route
              path="history"
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />
            <Route
              path="playlists/:playlistId"
              element={
                <PrivateRoute>
                  <PlaylistVideos />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>

        {!isUserLoggedIn && (
          <>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
