import { useRef } from "react";

export const Home = () => {
  const ref = useRef(null); // { current: null }

  const focusInput = () => {
    ref.current.focus();
  };

  const handleSubmit = () => {
    alert(ref.current.value);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <input ref={ref} placeholder="Enter Name" />
      </div>
      <button onClick={focusInput}>Focus on input</button>
      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
};
