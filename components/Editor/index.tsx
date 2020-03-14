import React from "react";
import styles from "./editor.module.css";
import useEditor from "../../hooks/useEditor";
import { SvgBold, SvgItalic, SvgUnderline } from "../svg";
import classNames from "classnames";

const Editor = () => {
  const [container, text, setText, actions] = useEditor("");
  const { bold, italic, underline } = actions;
  return (
    <div className={styles["editor-main"]}>
      <div className={styles["actions"]}>
        <div className={styles["action-group"]}>
          <button onClick={bold}>
            <SvgBold height={12} width={12} />
          </button>
          <button onClick={italic}>
            <SvgItalic height={12} width={12} />
          </button>
          <button onClick={underline}>
            <SvgUnderline height={12} width={12} />
          </button>
        </div>
        <div className={classNames(styles["action-group"], styles['save-group'])}>
          <button className={styles["save-button"]}>Save</button>
        </div>
      </div>
      <div className={styles["editor"]} ref={container} contentEditable></div>
    </div>
  );
};
export default Editor;
