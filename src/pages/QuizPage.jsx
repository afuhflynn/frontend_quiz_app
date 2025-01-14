import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const [imgUrl, setImgUrl] = useState("");
  const inputRef = useRef(null);
  const { quizName } = useParams();

  const handleInputChange = (value) => {
    console.log(`Image url: ${value}`);
    setImgUrl(value);
  };

  const handleButtonClick = () => {
    if (inputRef && inputRef.current) inputRef.current.click();
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-2xl font-bold">{quizName}</h1>
      <button
        onClick={handleButtonClick}
        className="text-white text-xl border-solid border-[1px] bg-blue-600 border-slate-500 rounded-xl outline-none flex flex-row items-center gap-4 px-6 py-4"
        type="button"
      >
        Upload Image <Upload />
      </button>
      <input
        type="file"
        accept="image/*"
        disabled={false}
        placeholder="Select an image"
        value={imgUrl}
        ref={inputRef}
        onChange={(e) => handleInputChange(e.target.value)}
        className="hidden"
      />
      {imgUrl.length > 2 && (
        <>
          <h1 className="text-black text-lg font-bold">Image: </h1>
          <img src={imgUrl} alt="Your image" className="max-w-full h-auto" />
        </>
      )}
    </div>
  );
};
export default QuizPage;
