import Image from "next/image";
import { client } from "@/sanity/lib/client";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{title, description}`);
  console.log("Response ", res);
  return res;
};

export default async function Home() {
  const productData = await getProductData();

  return <div></div>;
}
