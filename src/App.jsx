import React from "react";
import avatarImg from "./assets/pitchmatterlogo.jpg";

const links = [
  {
    title: "Watch us LIVE on Linkedin — follow for updates!",
    url: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fevents%2Ftokenizingthefuture-policy-powe7377661907102707712%2Ftheater%2F",
    icon: "linkedin",
    platform: "linkedin",
  },
  {
    title: "Watch us LIVE on Youtube — follow for updates!",
    url: "https://www.youtube.com/live/WsodsLpO8XM",
    icon: "youtube",
    platform: "youtube",
  },
  {
    title: "Watch us LIVE on Twitter — follow for updates!",
    url: "https://x.com/pitchxpo",
    icon: "x",
    platform: "x",
  },
  {
    title: "Watch us LIVE on Telegram — follow for updates!",
    url: "https://t.me/AngelSEEDcommunity",
    icon: "telegram",
    platform: "telegram",
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
  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9.03 15.52 8.9 19a1 1 0 0 0 1.6.8l2.2-1.7 3.7 2.7c.8.6 1.9.2 2.2-.7l3.42-12.1c.28-.98-.6-1.9-1.58-1.6L2.6 10.1c-1 .3-1 1.7 0 2l4.93 1.47 10.82-6.6-9.32 8.55Z"
        />
      </svg>
    );
  }
  if (name === "x") {
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

function Kebab() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="19" r="2" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="card glass">
        <div className="card-actions"></div>
        <img src={avatarImg} alt="Logo" className="avatar" />
        <h1 className="title">PITCH_XPO_X_HUE_X_MAXTRON</h1>
        <p className="subtitle">
          Tokenizing the Future: Policy. Power. Real-World Assets.
        </p>
        <p className="live-info">LIVE AT 3 OCT, 9:30PM (IST)</p>

        <div className="links">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className={`glass link-row link-${link.platform}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="left">
                <Icon name={link.icon} />
              </span>
              <span className="text">{link.title}</span>
              <span className="right" aria-hidden="true">
                ›
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
