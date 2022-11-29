// this is the api call
export const getShortenUrl = async (url) => {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    if (!res.ok) {
      const error = await res.json();
      throw error.error || "something went wrong !";
    } else {
      return res.json();
    }
  } catch (error) {
    throw error;
  }
};
