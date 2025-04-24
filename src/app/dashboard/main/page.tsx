import { SimpleWidget, WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard'
};

export default function MainPage() {
    return (
        <div className="text-black">
            <h1 className="text-3xl mt-2">Dashboard</h1>
            <p className="text-xl">Información general</p> 

            <WidgetsGrid/>
        </div>
    );
}   