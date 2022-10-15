import React from "react";

export const Buttons = () => {
  return (
    <>
      <div
        style={{ display: "grid", width: "90%", gap: "0.7rem", margin: "auto" }}
      >
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <button
            style={{
              backgroundColor: " #558",
              border: "none",
              padding: "1rem",
              fontSize: "26px",
              borderRadius: "1.3rem",
              width: "60%",
              cursor: 'pointer',
            }}
          >
            Tendencias
          </button>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 50%)" }}
          >
            <div
              style={{
                width: "1.7rem",
                height: "1.7rem",
                borderRadius: "0.3rem",
                background:
                  "linear-gradient(180deg, rgba(169,169,251,1) 0%, rgba(172,172,231,1) 100%)",
              }}
            ></div>
            <div
              style={{
                width: "1.7rem",
                height: "1.7rem",
                borderRadius: "0.3rem",
                background:
                  "linear-gradient(180deg, rgba(169,169,251,1) 0%, rgba(172,172,231,1) 100%)",
              }}
            ></div>
            <div
              style={{
                width: "1.7rem",
                height: "1.7rem",
                borderRadius: "0.3rem",
                background:
                  "linear-gradient(180deg, rgba(169,169,251,1) 0%, rgba(172,172,231,1) 100%)",
              }}
            ></div>
            <div
              style={{
                width: "1.7rem",
                height: "1.7rem",
                borderRadius: "0.3rem",
                background:
                  "linear-gradient(180deg, rgba(169,169,251,1) 0%, rgba(172,172,231,1) 100%)",
              }}
            ></div>
            <div
              style={{
                width: "1.7rem",
                height: "1.7rem",
                borderRadius: "0.3rem",
                background:
                  "linear-gradient(180deg, rgba(169,169,251,1) 0%, rgba(172,172,231,1) 100%)",
              }}
            ></div>
            <div
              style={{
                width: "1.7rem",
                height: "1.7rem",
                borderRadius: "0.3rem",
                background:
                  "linear-gradient(180deg, rgba(169,169,251,1) 0%, rgba(172,172,231,1) 100%)",
              }}
            ></div>
          </div>
        </div>

        <button
          style={{
            backgroundColor: "#ababff",
            border: "none",
            padding: "1rem",
            fontSize: "26px",
            borderRadius: "1.3rem",
            textAlign: "start",
            cursor: 'pointer',
          }}
        >
          Descrubrir <br />
          Emprendimientos
        </button>

        <div style={{ display: "flex", gap: "0.7rem" }}>
          <button
            style={{
              background:
                "linear-gradient(45deg, rgba(174,172,252,1) 0%, rgba(225,192,208,1) 100%)",
              border: "none",
              padding: "1rem",
              fontSize: "26px",
              borderRadius: "1.3rem",
              width: "100%",
              cursor: 'pointer',
            }}
          >
            Market
          </button>
          <button
            style={{
              backgroundColor: " #558",
              border: "none",
              padding: "1rem",
              fontSize: "26px",
              borderRadius: "1.3rem",
              width: "100%",
              cursor: 'pointer',
            }}
          >
            Temas
          </button>
        </div>
      </div>
    </>
  );
};
