import React, { useState } from "react";

const FileUpload = ({ onUpload }) => {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    onUpload(file);
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50 text-center">
      <label className="cursor-pointer">
        <span className="text-blue-600 font-semibold">Upload File</span>
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      {fileName && <p className="text-sm mt-2 text-gray-600">{fileName}</p>}
    </div>
  );
};

export default FileUpload;
