// import React from "react";
// import logoImg from "./assets/pitchmatterlogo.jpg";

// const socialLinks = [
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/events/web3-multiutilityecosystem-rwa7389941653865693184/theater/",
//     icon: "linkedin",
//     platform: "linkedin",
//   },
//   {
//     name: "YouTube",
//     url: "https://www.youtube.com/live/zIWmO-_pZE8?si=2WujwyYHreGhkUj_",
//     icon: "youtube",
//     platform: "youtube",
//   },
//   {
//     name: "Twitter",
//     url: "https://x.com/pitchxpo",
//     icon: "twitter",
//     platform: "twitter",
//   },
// ];

// function Icon({ name }) {
//   if (name === "linkedin") {
//     return (
//       <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
//         <path
//           fill="currentColor"
//           d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 3.9 0 4.6 2.5 4.6 5.7V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21h-4z"
//         />
//       </svg>
//     );
//   }
//   if (name === "youtube") {
//     return (
//       <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
//         <path
//           fill="currentColor"
//           d="M23 7.1s-.2-1.6-.8-2.3c-.8-.9-1.6-.9-2-1C16.8 3.4 12 3.4 12 3.4h0s-4.8 0-8.2.4c-.4 0-1.2.1-2 1C1.2 5.5 1 7.1 1 7.1S.8 8.9.8 10.6v1.6c0 1.7.2 3.5.2 3.5s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1 1.7.2 7 .4 7 .4s4.8 0 8.2-.4c.4 0 1.2-.1 2-1 .6-.7.8-2.3.8-2.3s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5ZM9.8 14.6V7.9l6.1 3.3-6.1 3.4Z"
//         />
//       </svg>
//     );
//   }
//   // if (name === "telegram") {
//   //   return (
//   //     <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
//   //       <path
//   //         fill="currentColor"
//   //         d="M9.03 15.52 8.9 19a1 1 0 0 0 1.6.8l2.2-1.7 3.7 2.7c.8.6 1.9.2 2.2-.7l3.42-12.1c.28-.98-.6-1.9-1.58-1.6L2.6 10.1c-1 .3-1 1.7 0 2l4.93 1.47 10.82-6.6-9.32 8.55Z"
//   //       />
//   //     </svg>
//   //   );
//   // }
//   if (name === "twitter") {
//     return (
//       <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
//         <path
//           fill="currentColor"
//           d="M18.2 2H21l-6.6 7.5L22 22h-6.8l-4.7-6-5.4 6H2l7.2-8-6.7-8h6.9l4.2 5.6L18.2 2Zm-1.2 18h2.1L7.1 4H5.1l11.9 16Z"
//         />
//       </svg>
//     );
//   }
//   return null;
// }

// export default function App() {
//   return (
//     <main className="page">
//       <section className="card">
//         <header className="header">
//           <img src={logoImg} alt="Logo" className="logo" />
//           <h1 className="title">
//             WEB3: MULTI UTILITY ECOSYSTEM <br />& RWA
//           </h1>

//           <p className="event-time">
//             LIVE at 7 Nov'25, 9:30 AM PDT | 8:30 PM GST | 10:00 PM IST
//           </p>
//         </header>

//         <div className="social-section">
//           <h2 className="social-heading">
//             Watch us LIVE - Follow for more updates!
//           </h2>
//           <div className="social-buttons">
//             {socialLinks.map((link, idx) => (
//               <a
//                 key={idx}
//                 href={link.url}
//                 className={`social-button social-button--${link.platform}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={`Watch on ${link.name}`}
//               >
//                 <Icon name={link.icon} />
//                 <span className="social-button__text">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import React from "react";
import logoImg from "./assets/pitchmatterlogo.jpg";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/events/goldminetokenisation7395404202228973570/theater/",
    icon: "linkedin",
    platform: "linkedin",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/live/aAyUwV8p6KU?si=QsnRfe_MZ6xz4WP_",
    icon: "youtube",
    platform: "youtube",
  },
  {
    name: "Twitter",
    url: "https://x.com/pitchxpo",
    icon: "twitter",
    platform: "twitter",
  },
];

function Icon({ name }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 3.9 0 4.6 2.5 4.6 5.7V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21h-4z"
        />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23 7.1s-.2-1.6-.8-2.3c-.8-.9-1.6-.9-2-1C16.8 3.4 12 3.4 12 3.4h0s-4.8 0-8.2.4c-.4 0-1.2.1-2 1C1.2 5.5 1 7.1 1 7.1S.8 8.9.8 10.6v1.6c0 1.7.2 3.5.2 3.5s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1 1.7.2 7 .4 7 .4s4.8 0 8.2-.4c.4 0 1.2-.1 2-1 .6-.7.8-2.3.8-2.3s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5ZM9.8 14.6V7.9l6.1 3.3-6.1 3.4Z"
        />
      </svg>
    );
  }
  // if (name === "telegram") {
  //   return (
  //     <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  //       <path
  //         fill="currentColor"
  //         d="M9.03 15.52 8.9 19a1 1 0 0 0 1.6.8l2.2-1.7 3.7 2.7c.8.6 1.9.2 2.2-.7l3.42-12.1c.28-.98-.6-1.9-1.58-1.6L2.6 10.1c-1 .3-1 1.7 0 2l4.93 1.47 10.82-6.6-9.32 8.55Z"
  //       />
  //     </svg>
  //   );
  // }
  if (name === "twitter") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.2 2H21l-6.6 7.5L22 22h-6.8l-4.7-6-5.4 6H2l7.2-8-6.7-8h6.9l4.2 5.6L18.2 2Zm-1.2 18h2.1L7.1 4H5.1l11.9 16Z"
        />
      </svg>
    );
  }
  return null;
}

export default function App() {
  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <img src={logoImg} alt="Logo" className="logo" />
          <h1 className="title">
            Gold Mine Tokenisation Redefining Gold Investment for the Digital
            Age
          </h1>

          <p className="event-time">
            LIVE at 20 Nov'25, 9:30 AM PDT | 8:30 PM GST | 10:00 PM IST
          </p>
        </header>

        <div className="social-section">
          <h2 className="social-heading">
            Watch us LIVE - Follow for more updates!
          </h2>
          <div className="social-buttons">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className={`social-button social-button--${link.platform}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Watch on ${link.name}`}
              >
                <Icon name={link.icon} />
                <span className="social-button__text">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
