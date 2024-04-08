const DragDropImages = () => {
    
  return (
    <div className="card p-3 m-4 shadow-md rounded-md">
      <div className="top text-center">
        <p className="font-bold text-purple-600">Drag & Drop image uploading</p>
      </div>
      <div className="drag-area h-40 rounded-md border-[2px] border-dashed border-purple-700 bg-gray-200 flex justify-center mt-3">
        <span className="select">Drop images here</span>
        Drag & Drop image here or <span className="select">Browse</span>
        <input type="file" name="file" className="file" multiple />
      </div>
      <div className="container">
        <div className="image w-20 mr-2 relative">
          <span className="delete">&times;</span>
        </div>
        <img src="" alt="" />
      </div>
      <button className="outline-none border-none text-white rounded-lg cursor-pointer py-3 px-5 bg-purple-500 w-full">
        Upload
      </button>
    </div>
  );
};

export default DragDropImages;
