import React from "react";
import styles from "./home.module.css";
import Menu from "../../components/Menu";
import NotesList from "../../components/NoteList";

const Home = () => {
  return (
    <div className={styles["home-page"]}>
      <Menu />
      <NotesList notes={[]} />
    </div>
  );
};

export default Home;
