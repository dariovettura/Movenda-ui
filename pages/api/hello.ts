import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const CK = process.env.NEXT_PUBLIC_CK;
  const CS = process.env.NEXT_PUBLIC_CS;
  const url =
  "https://www.beergardennapoli.it/menu/wp-json/wc/v2/products/categories?orderby=slug&per_page=100&consumer_key=" +
  CK +
  "&consumer_secret=" +
  CS;
  const result = await axios.get(url);
  res.status(200).json(result.data);}