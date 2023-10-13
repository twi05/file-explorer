import { useState } from "react";
function Folder({ explorer }) {
  console.log(explorer);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });
  const handleNewFolder = (e) => {
    e.stopPropagation();
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((item) => {
            return <Folder explorer={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: 5 }}>
        <span>📄{explorer.name}</span>
      </div>
    );
  }
}
export default Folder;
