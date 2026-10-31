const BASE_URL = "https://openapi.programming-hero.com/api/news";

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`, { cache: "force-cache" });
  const data = await res.json();
  return data.data;
};

export const getNewsByCategory = async (id) => {
  const res = await fetch(`${BASE_URL}/category/${id}`, { cache: "no-store" });
  const data = await res.json();
  return data.data;
};

export async function getnewsbyid(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}