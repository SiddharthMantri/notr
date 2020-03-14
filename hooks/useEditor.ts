import {
  createRef,
  useState,
  RefObject,
  Dispatch,
  SetStateAction
} from "react";

const useEditor = <T>(
  editorText: T | (() => T)
): [
  RefObject<any>,
  T,
  Dispatch<SetStateAction<T>>,
  { bold: () => void; italic: () => void; underline: () => void }
] => {
  const container = createRef();
  const [text, setText] = useState(editorText);
  const actions = {
    bold: () => {
      document.execCommand("bold", false, "");
    },
    italic: () => {
      document.execCommand("italic", false, "");
    },
    underline: () => {
      document.execCommand("underline", false, "");
    }
  };
  return [container, text, setText, actions];
};
export default useEditor;
