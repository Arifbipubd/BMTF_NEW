import axios from "axios";

export const getData = async (path: string) => {
  try {
    const respose = await axios.get(`${process.env.BASE_URL}api/${path}`);
    const data = await respose.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
