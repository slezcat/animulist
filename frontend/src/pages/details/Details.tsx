import React, { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { animeDetailsApi } from "../../api/animeAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAnime, reset } from "../../features/animeSlice";
import Container from "./components/Container";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "./components/Skeleton";

type Props = {};

const Details = (props: Props) => {
  let dispatch = useAppDispatch();
  const { animeId } = useParams();

  const { anime, status, message } = useAppSelector(
    (store: any) => store.anime
  );

  useEffect(() => {
    dispatch(getAnime(animeDetailsApi(animeId)));
    return () => {
      dispatch(reset());
    };
  }, [animeId, dispatch]);

  return (
    <>
      {
        //show whether the anime is successfully fetched or not
        (() => {
          switch (status) {
            case "loading":
              return <Skeleton />;
            case "idle":
              return <Container data={anime} />;
            case "failed":
              toast.error(message);
              return <Navigate to="/" />;
            default:
              break;
          }
        })()
      }
    </>
  );
};

export default Details;
