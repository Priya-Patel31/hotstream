import { Home } from "./pages/home/Home";
import { HeroSection } from "./pages/home/components/heroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Explore } from "./pages/explore/explore";
import { WithHeader } from "./shared/components/withHeader/WithHeader";
import Mockman from "./mockMan";
import { WatchLater } from "./pages/watchLater/WatchLater";
import { History } from "./pages/history/History";
import { Playlists } from "./pages/playlists/Playlists";
import { Likes } from "./pages/likes/Likes";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { useAuth } from "./context/auth/authContext";
import { Modal } from "./shared/components/modal/Modal";
import { PlaylistVideos } from "./pages/playlistVideos/PlaylistVideos";
import { PageNotFound } from "./shared/components/404NotFound/pageNotFound";
import { PrivateRoute } from "./shared/components/privateRoute/privateRoute";

export {
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
  PrivateRoute
};
