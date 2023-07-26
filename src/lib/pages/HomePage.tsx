import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function HomePage(){
    return(
        <div className="flex h-screen max-h-screen">
            <div className="m-3 flex gap-3 w-screen">
                <div className="h-full">
                    <Sidebar/>
                </div>
                <div className="w-full">
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}