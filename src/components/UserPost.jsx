import React from "react";

export const UserPost = () => {
  return (
    <>
      <div style={{ display: "grid", gap: "0.7rem", margin: "1rem" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <img
            style={{ height: "2.5rem", width: "2.5rem", borderRadius: "50%" }}
            src="https://data.whicdn.com/images/329090666/original.jpg"
            alt="profile-image"
          />
          <div>
            <h4 style={{ margin: 0 }}>Nahuel Santillan</h4>
            <p style={{ margin: 0, color: "#999999" }}>@Nawesan12</p>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid #d0d0d0",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            paddingBottom: "1rem",
          }}
        >
          Este es un post recomendado 🚀
          <br />
          La idea es que salgan asi resumiditos para una rapida consumisión 👀
        </div>
      </div>
    </>
  );
};
