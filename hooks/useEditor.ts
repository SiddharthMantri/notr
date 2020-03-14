import {
  createRef,
  useState,
  RefObject,
  Dispatch,
  SetStateAction
} from "react";

type Actions = {
  bold: () => void;
  italic: () => void;
  underline: () => void;
};

const useEditor = <T>(
  editorText: T | (() => T)
): [RefObject<any>, T, Dispatch<SetStateAction<T>>, Actions] => {
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
