import { useMediaQuery } from "react-responsive";
import ProductCard from "../product_card";
import { useAppSelector } from "../redux/store";

export default function NewItemsSection() {
  const tab: boolean = useMediaQuery({ query: "(max-width: 992px)" });
  const tabletDisplay = useMediaQuery({ query: "(max-width: 768px)" });
  const mobileDisplay: boolean = useMediaQuery({ query: "(max-width: 600px)" });

  const products = useAppSelector((state) => state.product.product)

  return (
    <div className="mt-5">
      <p className="fs-3 mt-3 ">New Items</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: tab
            ? tabletDisplay
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(3, minmax(0, 1fr))"
            : "repeat(4, minmax(0, 1fr))",
          columnGap: "3%",
          rowGap: "50px",
        }}>
          {products && products.slice(8,16).map(item=><ProductCard key={item.id} productData={item} />)}
      </div>
    </div>
  );
}
