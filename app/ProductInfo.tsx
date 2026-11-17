
interface ProductInfoProps {
    productInfo: {
        name: string;
        description: string;
        price: number;
    };
}
export default function ProductInfo({ productInfo }: ProductInfoProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Product Infeo</h1>
            <p>Name: {productInfo.name}</p>
            <p>Description: {productInfo.description}</p>
            <p>Price: ${productInfo.price.toFixed(2)}</p>
        </div>
    );
    };
