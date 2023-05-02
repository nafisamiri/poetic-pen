

import html2canvas from 'html2canvas';
import { useState } from 'react';

function Pen() {
  const [poem, setPoem] = useState('');

  function handlePoemChange(event) {
    setPoem(event.target.value);
  }

//   function handleExportClick() {
//     const poemContainer = document.getElementById('poem-container');
//     html2canvas(poemContainer).then(function (canvas) {
//       const link = document.createElement('a');
//       link.download = 'poem.png';
//       link.href = canvas.toDataURL('image/png');
//       link.click();
//     });
//   }
  function handleExportClick() {
    const poemTextArea = document.getElementById('poem-textarea');
    html2canvas(poemTextArea).then(function (canvas) {
      const link = document.createElement('a');
      link.download = 'poem.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
     <textarea
  id="poem-textarea"
  className="w-11/12 md:w-1/2 h-72 p-4 rounded-lg shadow-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
  placeholder="Write your poem here..."
  value={poem}
  onChange={handlePoemChange}
/>
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-purple-500 text-white font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={handleExportClick}
      >
        Export
        {/* <HiDownload className="inline-block ml-2" /> */}
      </button>
      <div id="poem-container" className="hidden">
        <pre>{poem}</pre>
      </div>
    </div>
  );
}

export default Pen;