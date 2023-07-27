import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen">
        <div className='fixed bottom-0 w-full '>
                <Navbar />
            </div>
            <div className='fixed left-0 h-full z-10'>
                <Sidebar/>
            </div>
    </div>
  );
}

// nanti urusan ProfileBar, harus diurusin bagian profile sama mutebuttonnya dia masih gerak sesuai naa profilenya harus dikasih maxwidth dulu
