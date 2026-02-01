// 'use client'

// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface Coordinates {
//   x: string;
//   y: string;
// }

// function ValentinePage() {
//   const searchParams = useSearchParams();
//   const name = searchParams.get("name") ?? "Hey you";

//   const [image, setImage] = useState(false);
//   const [coord, setCoords] = useState<Coordinates | null>(null);
//   const [response, setResponse] = useState("No");

//   const handleNoBtn = () => {
//     const x = Math.random() * 60;
//     const y = Math.random() * 60;

//     setCoords({ x: `${x}%`, y: `${y}%` });

//     const phrases = [
//       "Wrong button ❌",
//       "Kao Kopa 🥺",
//       "Tlaya hle 🥺👉👈",
//       "Waiiii 😭",
//       "Please? 🙏💖",
//     ];

//     setResponse(phrases[Math.floor(Math.random() * phrases.length)]);
//   };

//   return (
//     <div className="container">
//       <section>
//         <p>{name}, Will you be my Valentine?</p>

//         <Image
//           src={image ? "/heppi.gif" : "/please.gif"}
//           alt="valentine gif"
//           width={320}
//           height={200}
//           priority
//         />

//         <div className="button-section" style={{ position: "relative" }}>
//           <Link href="/success">
//             <button
//               className="yes-button"
//               onMouseOver={() => setImage(true)}
//               onMouseOut={() => setImage(false)}
//             >
//               Yes
//             </button>
//           </Link>

//           <button
//             className="no-button"
//             style={
//               coord
//                 ? { position: "absolute", top: coord.y, left: coord.x }
//                 : undefined
//             }
//             onMouseOver={handleNoBtn}
//             onClick={handleNoBtn}
//           >
//             {response}
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ValentinePage;


'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// export const dynamic = "force-dynamic";


interface Coordinates {
  x: string;
  y: string;
}

function ValentinePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "Hey you";


  const [image, setImage] = useState(false);
  const [coord, setCoords] = useState<Coordinates | null>(null);
  const [response, setResponse] = useState('No');

  const handleNoBtn = () => {
    const x = Math.random() * 60;
    const y = Math.random() * 60;

    setCoords({ x: `${x}%`, y: `${y}%` });

    const phrases = 
[
  "Wrong button ❌",
  "Kao Kopa 🥺",
  "Are you sure? 🤔",
  "But what if? 😳",
  "Bebe?????",
  "You're breaking my heart 💔",
  "Waiiii 🥺👉👈",
  "Pretty please 🥺🙏",
  "Can't catch up? 😂",
  "Oopsie! 😅",
  "Nooo 😭",
  "Tlaya hle 🥺👉👈",
  "Hehe 😏",
  "Yikes! 😬",
  "Please? 🙏💖",
  "Aww 😢💖",
  "Hmm 🤨",
]


    const randomIndex = Math.floor(Math.random() * phrases.length);
    setResponse(phrases[randomIndex]);
  }

  const handleYesBtn = () => {
    setImage(!image);
  }

  return (
    <div className="container">
      <section>
        <div>
          <p>{name}, will you be my Valentine?❤️</p>
        </div>
        <div className="img-container">
          {image ? (
            <Image src="/heppi.gif" alt="cat spinning with sparkles" width={270} height={200} className="cat" />

          ) : (
            <Image src="/please.gif" alt="two animals asking each other to be their valentine gif" width={340} height={200} priority />
          )}
        </div>
        <div className="button-section">
          <Link href='/success'>
            <button
              className="yes-button button-base button-green"
              onMouseOver={handleYesBtn} onMouseOut={handleYesBtn}
            >
              Yes
            </button>
          </Link>
          <button className='no-button button-base button-red' style={coord ? { position: 'absolute', top: coord.x, right: coord.y } : undefined}
            onClick={handleNoBtn} onMouseOver={handleNoBtn}
          >{response}</button>
        </div>
      </section>
    </div >
  );
}

export default ValentinePage;
