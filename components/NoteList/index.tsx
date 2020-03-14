import React from "react";
import styles from "./notes.module.css";
import { Notes } from "../../types/types";
import NoteItem from "../NoteItem";

const NotesList = ({ notes }: { notes: Notes }) => (
  <div className={styles["notes-list"]}>
    {notes.map((note, i) => (
      <NoteItem key={i} {...note} />
    ))}
  </div>
);

export default NotesList;
