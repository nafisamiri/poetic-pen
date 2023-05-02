
// // import { HiDownload } from 'react-icons/hi';

// function Card({ imageUrl }) {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="w-11/12 md:w-1/2 h-auto p-4 rounded-lg shadow-md bg-white">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-center mb-4">
//             Song Title Here
//           </h1>
//           <p className="text-sm font-medium text-gray-500 text-center">
//             Artist Name Here
//           </p>
//         </div>
//         <div
//           className="w-full h-72 bg-white overflow-y-scroll"
//           style={{ backgroundImage: `url(${imageUrl})` }}
//         >
//           <div className="p-8">
//             <div className="flex flex-col space-y-4">
//               <div className="flex justify-center">
//                 <p className="text-lg font-semibold text-gray-500">Verse 1</p>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <p className="text-base font-medium text-gray-700">
//                   Line 1 of Verse 1 Here
//                 </p>
//                 <p className="text-base font-medium text-gray-700">
//                   Line 2 of Verse 1 Here
//                 </p>
//                 <p className="text-base font-medium text-gray-700">
//                   Line 3 of Verse 1 Here
//                 </p>
//               </div>
//               <div className="flex justify-center">
//                 <p className="text-lg font-semibold text-gray-500">Chorus</p>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <p className="text-base font-medium text-gray-700">
//                   Line 1 of Chorus Here
//                 </p>
//                 <p className="text-base font-medium text-gray-700">
//                   Line 2 of Chorus Here
//                 </p>
//                 <p className="text-base font-medium text-gray-700">
//                   Line 3 of Chorus Here
//                 </p>
//               </div>
//               <div className="flex justify-center">
//                 <p className="text-lg font-semibold text-gray-500">Verse 2</p>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <p className="text-base font-medium text-gray-700">
//                   Line 1 of Verse 2 Here
//                 </p>
//                 <p className="text-base font-medium text-gray-700">
//                   Line 2 of Verse 2 Here
//                 </p>
//                 <p className="text-base font-medium text-gray-700">
//                   Line 3 of Verse 2 Here
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           className="mt-4 px-4 py-2 rounded-lg bg-purple-500 text-white font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           onClick={() => window.open(imageUrl)}
//         >
//           Download Image
//           {/* <HiDownload className="inline-block ml-2" /> */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card;