import axios from "axios";

const url = import.meta.env.VITE_URL_API_PENSIUN;

export const fetchData = async (action = null, data = null) => {
  try {
    let time = new Date().getTime();
    const respon = await axios.get(url, {
      params: {
        action,
        data: JSON.stringify(data),
        time,
      },
    });

    if (respon.data.error) throw new Error(respon.data.message);
    return respon.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
