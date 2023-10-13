import { useState } from "react";
import "./styles.css";
import data from "../data/folderData.js";
import Folder from "../components/Folder";

export default function App() {
  const [explorerData, setExplorerData] = useState(data);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
