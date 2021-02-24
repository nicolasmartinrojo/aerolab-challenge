import axios from "axios";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJkMTUwZDdlNzE4NzAwMjBlMzhlZjgiLCJpYXQiOjE2MTM1NjcyNDV9.86Gj84cfyqKQDD_-0owmWofJmmF6XzEBhPrd439lxzY`;
const api = {
  getProducts: async () => {
    return await axios
      .get("https://coding-challenge-api.aerolab.co/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  },
};

export default api;
