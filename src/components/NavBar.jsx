import React from "react";

export const NavBar = () => {
  return (
    <>
      <form
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          margin: "1rem",
        }}
      >
        <button
          type="submit"
          style={{
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="33"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
        <div
          style={{
            height: "1.8rem",
            backgroundColor: "white",
            color: "black",
            border: "1px solid gray",
            borderRadius: "1rem",
            margin: "auto",
            width: "67%",
            padding: "0.2rem",
          }}
        >
          <input
            style={{
              backgroundColor: "white",
              color: "gray",
              border: "none",
              paddingLeft: "0.5rem",
              marginLeft: "1rem",
              outline: "none",
              marginTop: "0.3rem",
            }}
            type="text"
            placeholder="Qué estas buscando?"
          />
        </div>

        <button
          type="button"
          style={{
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-adjustments-horizontal"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="14" cy="6" r="2" />
            <line x1="4" y1="6" x2="12" y2="6" />
            <line x1="16" y1="6" x2="20" y2="6" />
            <circle cx="8" cy="12" r="2" />
            <line x1="4" y1="12" x2="6" y2="12" />
            <line x1="10" y1="12" x2="20" y2="12" />
            <circle cx="17" cy="18" r="2" />
            <line x1="4" y1="18" x2="15" y2="18" />
            <line x1="19" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </form>
    </>
  );
};
