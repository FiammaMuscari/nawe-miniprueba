import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#292935",
        position: "fixed",
        bottom: 0,
        width: "100%",
        maxWidth: "393px",
        height: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "1rem",
        }}
      >
        <div style={{cursor: 'pointer'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </div>
        <div style={{cursor: 'pointer'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
        <button
          style={{
            background:
              "linear-gradient(180deg, rgba(86,86,137,1) 0%, rgba(168,168,251,1) 100%)",
            border: "2px solid white",
            borderRadius: "50%",
            padding: "0.6rem",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            marginTop: "-1.8rem",
            height: "100%",
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-plus"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <div style={{cursor: 'pointer'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-inbox"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M4 13h3l3 3h4l3 -3h3" />
          </svg>
        </div>
        <div>
          <img
            style={{ height: "2.5rem", width: "2.5rem", borderRadius: "50%", cursor: 'pointer', }}
            src="https://data.whicdn.com/images/329090666/original.jpg"
            alt="profile-image"
          />
        </div>
      </div>
    </div>
  );
};
