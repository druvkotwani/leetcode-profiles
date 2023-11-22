

const Profile = ({ userData }) => {
    return (
        <div className="mt-4 mb-2">
            <div className="flex  justify-center gap-2">
                {/* Image */}
                <div className="relative flex h-20 w-[70px] shrink-0 flex-nowrap">
                    <img src={userData.profileData.image} alt="Avatar" className="h-[70px] w-[70px] rounded-lg object-cover" />
                </div>

                {/* Name/username/rank*/}
                <div className="flex flex-col">
                    <div className="flex items-center" >
                        <p className="  break-all text-sm font-semibold text-[#FFFEFE]">{userData.profileData.fullName}</p>
                    </div>
                    <div className="flex items-center flex-nowrap" >
                        <p className="text-xs text-[#9FA1A4]">{userData.profileData.username}</p>
                        {userData.profileData.badgeImg && <div className="ml-1">
                            <img src={userData.profileData.badgeImg} className="h-[14px] w-[14px]" />
                        </div>}
                    </div>
                    <p className="flex mt-3 items-end space-x-[5px] text-base">
                        <span className="text-sm text-[#9FA1A4] ">Rank</span>
                        <span className=" text-sm font-medium text-[#FFFFF8]">{userData.profileData.rank}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile