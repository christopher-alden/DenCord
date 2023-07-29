import { auth } from '../../firebase';
import RoundedButton from '../components/buttons/RoundedButton';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { signOut } from 'firebase/auth';

export default function HomePage() {
  return (
    <RoundedButton handleEvent={()=>signOut(auth)} textColor="text-white" font='text-xl' color="bg-red-500">logout</RoundedButton>
  );
}

// nanti urusan ProfileBar, harus diurusin bagian profile sama mutebuttonnya dia masih gerak sesuai naa profilenya harus dikasih maxwidth dulu
