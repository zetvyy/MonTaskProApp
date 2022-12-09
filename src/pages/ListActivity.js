import React, { useState, useEffect, Fragment } from "react";
import SideBar from "../components/sideBar";
import Navbar from "../components/navbar";
import Card from "../components/cardActivity";
import { Form } from "../components/formPopup";
import { loading } from "../utils/customToast";
import {
  deleteData,
  getData,
  saveData,
  updateData,
  inProgres,
  getDataInProgres,
  Completed,
  getDataCompleted,
} from "../utils/data-api";
import "../style/ListActivity.css";

function ListActivity() {
  const [dataTodo, setDataTodo] = useState();
  const [dataInProgress, setDataInProgress] = useState();
  const [dataCompleted, setDataCompleted] = useState();
  const [tempData, setTempData] = useState();
  const dataUser = localStorage.getItem("id");
  const [user, setUser] = useState({
    id: "",
    judul: "",
    deadline: "",
    content: "",
  });

  useEffect(() => {
    async function getDataTodo() {
      const result = await getData(dataUser);
      setDataTodo(result);
    }
    async function getDataProgres() {
      const result = await getDataInProgres(dataUser);
      setDataInProgress(result);
    }
    async function getCompletedData() {
      const result = await getDataCompleted(dataUser);
      setDataCompleted(result);
    }
    getDataTodo();
    getDataProgres();
    getCompletedData();
  }, [tempData]);

  const onHandleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const showPopUpForm = () => {
    const form = document.querySelector(".Formnewproject");
    // setUser({
    //     judul:'',
    //     deadline: '',
    //     content: '',
    // })
    form.style.display = "block";
  };

  const closePopUpForm = () => {
    const form = document.querySelector(".Formnewproject");

    form.style.display = "none";
  };

  const onHandleSubmit = async () => {
    const { judul, deadline, content } = user;
    const dataForm = {
      judul: judul,
      deadline: deadline,
      content: content,
      userId: dataUser,
    };

    if (judul !== "" && deadline !== "" && content !== "") {
      const succes = await saveData(dataForm).catch((err) => err);
      if (succes) {
        loading(false, "data berhasil di simpan");
        setUser({
          judul: "",
          deadline: "",
          content: "",
        });
        setTempData(dataForm);
      }
    } else {
      alert("Semua data harus diisi");
    }
  };

  const onHandleMove = (data, action) => {
    setTempData("trigger");
    switch (action) {
      case "inProgres":
        Completed(data, dataUser);
        deleteData(data.id, dataUser, "move", "inProgres");
        break;
      case "Completed":
        deleteData(data.id, dataUser, "move", "Completed");
        break;
      case "NextUp":
        inProgres(data, dataUser);
        deleteData(data.id, dataUser, "move", "nextUp");
        break;
      default:
        break;
    }
    console.log(data, action);
  };

  const onHandleDelete = (del) => {
    const answer = window.confirm(
      `Apakah anda yakin ingin menghapus ${del.judul || del.value.judul}`
    );
    if (answer) {
      setTempData("triggerr");
      deleteData(del.id, dataUser, "move", "inProgres");
      deleteData(del.id, dataUser, "move", "Completed");
      deleteData(del.id, dataUser, "move", "nextUp");
    }
  };

  return (
    <div className="listActivity">
      <SideBar active="task" />
      <div className="listActivity__content">
        <Navbar />
        <div className="content__titleandbutton">
          <div className="titleandbutton__title">
            <p className="title__name">Kamu nanya</p>
            <h2 className="title__header">My Task</h2>
          </div>
          <div className="titleandbutton__button">
            <button onClick={showPopUpForm}>Add New Task</button>
          </div>
        </div>
        <div className="content__task">
          <div className="task__todo">
            <div className="task__title todo">
              <p>TO DO</p>
              <div className="title_count todo">
                <p>{dataTodo !== undefined ? dataTodo.length : 0}</p>
              </div>
            </div>
            <div className="task__line todo"></div>
            <div className="task_card_container">
              {dataTodo !== undefined ? (
                dataTodo.length !== 0 ? (
                  <Fragment>
                    {dataTodo.map((e) => {
                      return (
                        <Card
                          key={e.id}
                          id={e.id}
                          title={e.value.judul}
                          desc={e.value.content}
                          date={e.value.deadline}
                          onClickMove={() => onHandleMove(e, "NextUp")}
                          onClickDel={() => onHandleDelete(e)}
                        />
                      );
                    })}
                  </Fragment>
                ) : (
                  <p>Data Kosong</p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className="task__inproggres">
            <div className="task__title inproggres">
              <p>IN PROGRESS</p>
              <div className="title_count inproggres">
                <p>
                  {dataInProgress !== undefined ? dataInProgress.length : 0}
                </p>
              </div>
            </div>
            <div className="task__line inproggres"></div>
            <div className="inproggres_card_container">
              {dataInProgress !== undefined ? (
                dataInProgress !== 0 ? (
                  <Fragment>
                    {dataInProgress.map((e) => {
                      return (
                        <Card
                          key={e.id}
                          id={e.id}
                          title={e.value.judul}
                          desc={e.value.content}
                          date={e.value.deadline}
                          onClickMove={() => onHandleMove(e, "inProgres")}
                          onClickDel={() => onHandleDelete(e)}
                        />
                      );
                    })}
                  </Fragment>
                ) : (
                  <p>Data Kosong</p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className="task__completed">
            <div className="task__title completed">
              <p>COMPLETED</p>
              <div className="title_count completed">
                <p>{dataCompleted !== undefined ? dataCompleted.length : 0}</p>
              </div>
            </div>
            <div className="task__line completed"></div>
            <div className="completed_card_container">
              {dataCompleted !== undefined ? (
                dataCompleted.length !== 0 ? (
                  <Fragment>
                    {dataCompleted.map((e) => {
                      return (
                        <Card
                          key={e.id}
                          id={e.id}
                          title={e.value.judul}
                          desc={e.value.content}
                          date={e.value.deadline}
                          onClickDel={() => onHandleDelete(e)}
                          completed="complete"
                        />
                      );
                    })}
                  </Fragment>
                ) : (
                  <p>Data Kosong</p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <Form
          className="Formnewproject"
          title="Ok"
          onClick={onHandleSubmit}
          onChange={(e) => onHandleChange(e)}
          onClickClose={closePopUpForm}
          Judul={user.judul}
          Deadline={user.deadline}
          Conten={user.content}
        />
      </div>
    </div>
  );
}

export default ListActivity;
