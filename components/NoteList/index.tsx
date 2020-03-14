import React from "react";
import styles from "./notes.module.css";
import { Notes } from "../../types/types";
import NoteItem from "../NoteItem";

const NotesList = ({ notes }: { notes: Notes }) => (
  <div className={styles["notes-list"]}>
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>
        <h3>Notes</h3>
      </div>
      {notes.map((note, i) => (
        <NoteItem key={i} {...note} />
      ))}
    </div>
  </div>
);

export default NotesList;
