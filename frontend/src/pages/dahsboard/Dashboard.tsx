import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAnimeList } from "../../features/list/listSlice";

type Props = {};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { user } = useAppSelector((state) => state.auth);
  const { animeList, status, message } = useAppSelector((state) => state.list);

  useEffect(() => {
    
    if (!user) {
      navigate("/login");
    }

    dispatch(getAnimeList())
  }, [navigate, user]);

  return (
    <>
      <section>

      </section>
    </>
  );
};

export default Dashboard;
