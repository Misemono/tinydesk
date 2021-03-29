import React from "react";
import { FolderPlus } from "react-feather";

export default function Folder({ info }) {
  return (
    <a className="folder-wrapper">
      {info.title ? (
        <div className="folder-title">{info.title}</div>
      ) : (
        <div className="add-folder">
          <FolderPlus size={20} />
        </div>
      )}
    </a>
  );
}
