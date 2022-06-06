import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// const config = {
//   buttons: ["bold", "italic", "link", "unlink", "underline", "source", 'insertImage],
// };
const config = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
    "undo",
    "redo",
  ],
};

const RichTextEditor = ({ data, setData }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={(e, editor) => setData({ ...data, body: editor.getData() })}
      config={config}
    />
  );
};

export default RichTextEditor;
