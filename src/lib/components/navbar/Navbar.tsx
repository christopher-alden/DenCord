import ActionBar from "../ui/ActionBar"
import AudioPanel from "../ui/AudioPanel"
import ProfileBar from "../ui/ProfileBar"

const Navbar = () => (
    <div className="w-full h-16">
        <div className="h-full w-full bg-sub  rounded-t-lg px-4 py-2 items-center justify-center flex">
            <div className="bg-main w-[40%] h-full rounded-full flex">
                <input className="w-full rounded-full px-8 bg-transparent outline-none text-light" placeholder="Type something..."></input>
            </div>
            <div className="flex gap-10 absolute right-0 px-4 ">
                <AudioPanel/>
                <ProfileBar username="AldenSayang" activityStatus="away" profileImg="https://gamefinity.id/wp-content/uploads/2022/12/marin.jpg"/>
            </div>
        </div>
    </div>
)

export default Navbar