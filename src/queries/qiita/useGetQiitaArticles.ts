import { MediumPost } from "../../types";
import { TQiitaResponse } from "./types";

const header = {
  headers: {
    Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
  },
};



export const useGetQiitaArticles = async () => {
  const res = await fetch(
    'https://qiita.com/api/v2/authenticated_user/items',
    header,
  );

  const json: TQiitaResponse = await res.json();

  const result: MediumPost[] = json.map((value) => ({
      title: value.title,
      text: value.body,
      cover: '',
      url: value.url,
      date: value.created_at,
      time: 0,
  }));

  return result;
};

