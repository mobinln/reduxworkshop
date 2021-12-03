import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";

import { RootState } from "../../store";
import { selectProducts } from "./productsSlice";

export default function ProductsList() {
    const products: any = useSelector<RootState>(selectProducts);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {products.map((product: any) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
}
