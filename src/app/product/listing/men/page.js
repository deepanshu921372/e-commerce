import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";
import { Suspense } from "react";


const ProductLoading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);


export default async function MenAllProducts() {
  try {
    return (
      <Suspense fallback={<ProductLoading />}>
        <MenProducts />
      </Suspense>
    );
  } catch (error) {
    console.error("Error loading men's products:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
}


export default async function MenAllProducts() {
  const getAllProducts = await productByCategory("men");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
