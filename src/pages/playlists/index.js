import { useEffect } from "react";
import { Playlist } from "../../assets/images";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/playlist/playlistContext";
import "./playlists.css";
import { EmptyList } from "../../shared/components/emptyList/EmptyList";
import { changeDocumentTitle } from "../../shared/utils/changeDocumentTitle";

export{useEffect,Playlist,Link,usePlaylist,EmptyList,changeDocumentTitle}