export const origin = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://quapri.onrender.com";
