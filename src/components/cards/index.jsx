import React from "react";
import { useQueryHendler } from "../../hooks/useQueryHandler";
import Card from "./card";

const Cards = () => {
  const { data, isLoading, isError } = useQueryHendler({
    url: "products",
    pathname: "products",
  });

  if (isLoading) {
    return <div className="container mx-auto w-[90%]">Loading...</div>;
  }

  if (isError) {
    return <div className="container mx-auto w-[90%]">Error loading data.</div>;
  }

  return (
    <div className="grid gap-[20px] grid-cols-5">
      {data?.map((products) => (
        <Card key={products.id} products={products} />
      ))}
    </div>
  );
};

export default Cards;
