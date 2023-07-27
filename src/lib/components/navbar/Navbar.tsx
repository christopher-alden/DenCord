import ActionBar from "../ui/ActionBar"
import AudioPanel from "../ui/AudioPanel"
import ProfileBar from "../ui/ProfileBar"

const Navbar = () => (
    <div className="w-full h-16">
        <div className="h-full w-full bg-sub  rounded-t-lg px-4 py-2 items-center justify-center flex">
            <div className="bg-main w-[40%] h-full rounded-full flex">
                <input className="w-full rounded-full px-8 bg-transparent outline-none text-light text-md" placeholder="Type something..."></input>
            </div>
            <div className="flex gap-10 absolute right-0 px-4 ">
                <AudioPanel/>
                <ProfileBar username="HANi" activityStatus="online" profileImg="https://media.licdn.com/dms/image/D5603AQGlnHJJ2uvFtw/profile-displayphoto-shrink_800_800/0/1688960564625?e=2147483647&v=beta&t=H3kgWw78HQVAE9gvVrXvYqKPF6nz-ILJrU4Vdr2bpUI"/>
            </div>
        </div>
    </div>
)

export default Navbar