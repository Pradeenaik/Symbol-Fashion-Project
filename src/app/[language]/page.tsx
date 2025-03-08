"use client";
import BackgroundNav from "./HomePage/BackgroundNav";
import { Get_Product } from "@/services/api/config";
import { getRequest } from "@/services/axios";
import { useEffect, useState } from "react";

type Props = {
  params: Promise<{ language: string }>;
};


const images = [
  'https://media3.symbol.fashion/aio-images/19/00/190005627bcb9593f3718304a93eb33a/4332f427-bf10-4e41-80d7-45476b508423.jpg',
  'https://media3.symbol.fashion/aio-images/bb/fd/bbfd12deb9f9980c35206b365538e3fd/8c129176-9bce-4733-a900-d5a7460f2d9f.jpg',
  'https://media3.symbol.fashion/aio-images/60/22/6022264e8d8f8ea4dfffcffdc04c7d3a/1a626dd8-82de-409a-84e4-4a4f02b16da3.jpg',
];


export default function Home(props: Props) {

   const [product, setProducts] = useState([]);

  // useEffect(() => {
  //   images = getRequest('products').then(response => response.data.map(imag)=>imag)
  // }, [])

  // useEffect(() => {
  //   getRequest(Get_Product)
  //     .then(response => {
  //       console.log("Products ==> ", response.data);
  //       setProducts(response.data.products);
  //     })
  //     .catch(error => console.error("API Error: ", error));
  // }, []);

  //console.log("Products ==> ", Get_Product);


  // Could be GET or POST/PUT/PATCH/DELETE


  // console.log(product)

  /* { status: 'ok', method: 'GET' } */

  // const [images, setImages] = useState<string[]>([]);

  // useEffect(() => {
  //   getRequest(Get_Product)
  //     .then(response => {
  //       const productData = response.data.products;
  //       setProducts(productData);

  //       // Extract images from products
  //       const productImages = productData.flatMap((product: any) => product.images || []);
  //       setImages(productImages);
  //     })
  //     .catch(error => console.error("API Error: ", error));
  // }, []);

  return (
    <>
      <BackgroundNav images={images} />
    </>
  );
}
