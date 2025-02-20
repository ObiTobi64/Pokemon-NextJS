import { CartCounter } from "@/shopping-cart";



export const metadata = {
    title: 'Shopping Cart',
    description: 'Un simple contador',
};

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <span>Productos en el carrito</span>
            
            <CartCounter value={0}/>
            
        </div>
    );
}