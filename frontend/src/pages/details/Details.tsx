import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  animeDetails } from "../../api/animeAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAnime } from "../../features/animeSlice";
import Container from "./components/Container";

type Props = {};

const Details = (props: Props) => {
 
  const { anime, status } = useAppSelector((store: any) => store.anime);

  const dispatch = useAppDispatch();
  const { animeId } = useParams();

  useEffect(() => {
    dispatch(getAnime(animeDetails(animeId)));
  }, [animeId, dispatch]);


  return (
    <>
    {
        //show whether the anime is successfully fetched or not
        (() => {
          switch (status) {
            case "loading":
              return <h1>loading</h1>
            case "idle":
              // return <Container data={anime[0]["details"]}/>
              return console.log(anime)
            case "failed":
              return (
                <h1 className="mt-12 h-[100vh] w-full text-center text-6xl text-white">
                  Something Went Wrong!
                </h1>
              );
            case "not found":
              return (
                <h1 className="mt-12 h-[100vh] w-full text-center text-6xl text-white">
                  No Result
                </h1>
              );
            default:
              break;
          }
        })()
      }
    </>
  );
};

export default Details;
