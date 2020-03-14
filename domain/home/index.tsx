import React from "react";
import styles from "./home.module.css";
import Menu from "../../components/Menu";
import NotesList from "../../components/NoteList";
import Editor from "../../components/Editor";

const Home = () => {
  return (
    <div className={styles["home-page"]}>
      <Menu />
      <NotesList notes={[]} />
      <Editor />
    </div>
  );
};

export default Home;
