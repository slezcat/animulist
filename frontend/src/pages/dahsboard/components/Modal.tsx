import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteAnime, editAnime } from "../../../features/list/listSlice";
import { closeModal } from "../../../features/modalSlice";
import Select from "react-select";
import { toast } from "react-toastify";

type Props = {};

const Modal = () => {
  const dispatch = useAppDispatch();

  const { isModalOpen, content }: any = useAppSelector((state) => state.modal);
  const { status } = useAppSelector((state) => state.list);

  const { title, listStatus, progress, rating, _id } = content;

  const [modalData, setModalData] = useState({
    newListStatus: "",
    newProgress: 0,
    newRating: 0,
    _id: _id,
  });

  const { newListStatus, newProgress, newRating } = modalData;

  const onChange = (e: any) => {
    setModalData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const updatedData = {
      listStatus: newListStatus || listStatus,
      progress: newProgress || progress,
      rating: newRating || rating,
      _id: _id,
    };

    dispatch(editAnime(updatedData));
    onClose();
  };

  const onClose = () => {
    dispatch(closeModal());
  };

  const handleDelete = (id:any)=>{
    dispatch(deleteAnime(_id))
    toast.success("Anime has been deleted from your list!")
  }

  if (!isModalOpen) return null;

  return (
    <div className="fixed z-50 h-screen  w-screen bg-black bg-opacity-50 text-black">
      <div
        className="fixed top-[50%] left-[50%] 
      flex
      min-h-[280px]
      w-[450px]
      translate-x-[-50%]
      translate-y-[-50%]
      flex-col
       gap-4 rounded bg-[#202020] p-5 
      "
      >
        <div className="flex justify-between text-white">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button onClick={onClose}>X</button>
        </div>
        <hr />

        <form onSubmit={onSubmit} className="flex h-full flex-col gap-4 ">
          <div className="flex h-full flex-col gap-4">
            <div className="flex justify-between">
              <label htmlFor="status" className="text-white">
                List Status
              </label>

              <select
                name="newListStatus"
                id="status"
                className="w-[190px] p-1"
                onChange={onChange}
                defaultValue={listStatus}
              >
                <option value="Watching">Watching</option>
                <option value="Plan to Watch">Plan to Watch</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
                <option value="Dropped">Dropped</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label htmlFor="progress" className="text-white">
                Progress
              </label>
              <div className="flex w-[190px]">
                <input
                  name="newProgress"
                  onChange={onChange}
                  className="p-1"
                  id="progress"
                  type={"number"}
                  min={0}
                  max={10}
                  defaultValue={progress}
                ></input>
                <div className="ml-2 text-white">of 10 episodes</div>
              </div>
            </div>
            <div className="flex justify-between">
              <label htmlFor="rating" className="text-white">
                Rating
              </label>
              <div className="flex w-[190px]">
                <input
                  name="newRating"
                  onChange={onChange}
                  className="p-1"
                  id="Rating"
                  type={"number"}
                  min={0}
                  max={10}
                  defaultValue={rating}
                ></input>
                <div className="ml-2 text-white">of 10 rating</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-2 flex justify-between font-semibold text-white">
            <button className="rounded bg-[#373737] px-4 py-1 hover:bg-red-500"
            onClick={()=>handleDelete(_id)}
            >
              Delete
            </button>
            <button
              className="rounded bg-[#16a085] px-4 py-1"
              type="submit"
              disabled={false}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
