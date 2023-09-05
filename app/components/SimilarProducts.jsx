"use client";

import { useEffect, useState } from "react";
import ProductComp from "./Product";
import { BiLoader } from "react-icons/bi";

const products = [
  {
    id: 1,
    title: "Brown letter bag",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quisquam.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  },
  {
    id: 2,
    title: "School books",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quisquam.",
    url: "https://picsum.photos/id/20",

    price: 1990,
  },
];

export default function SimilarProducts() {
  return (
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto" />

        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 mt-4">
            Similar sponsored items
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {products.map((product) => (
                <ProductComp key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader size={30} className="text-blue-400 animate-spin" />
                Loading Products...
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
