import ActionBar from "../ui/ActionBar"
import AudioPanel from "../ui/AudioPanel"
import ProfileBar from "../ui/ProfileBar"

const Navbar = () => (
    <div className="w-full h-14">
        <div className="h-full w-full bg-sub rounded-lg px-4 py-2 items-center justify-between flex">
            <ActionBar/>
            <div className="flex gap-4">
                <AudioPanel/>
                <ProfileBar username="AldenSayang" activityStatus="away" profileImg="https://gamefinity.id/wp-content/uploads/2022/12/marin.jpg"/>
            </div>
        </div>
    </div>
)

export default Navbar