import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 8e83ab4837496c2399e3d2ee96d700133974d047743d50e0d447b95098cd50df"
  }
});
