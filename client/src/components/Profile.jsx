

const Profile = ({ userData }) => {
    return (
        <div className="mt-4 mb-2">
            <div className="flex space-x-4 justify-center gap-3">
                {/* Image */}
                <div className="relative flex h-20 w-20 shrink-0">
                    <img src={userData.profileData.image} alt="Avatar" className="h-20 w-20 rounded-lg object-cover" />
                </div>

                {/* Name/username/rank*/}
                <div className="flex flex-col">
                    <div className="flex items-center" >
                        <p className="text-label-1  break-all text-base font-semibold text-[#FFFEFE]">{userData.profileData.fullName}</p>
                    </div>
                    <div className="flex items-center" >
                        <p className="text-label-3 dtext-xs text-[#9FA1A4]">{userData.profileData.username}</p>
                        <div className="ml-1">
                            <img src={userData.profileData.badgeImg} className="h-[14px] w-[14px]" />
                        </div>
                    </div>
                    <p className="flex flex-1 items-end space-x-[5px] text-base">
                        <span className="text-label-2 text-[#9FA1A4] ">Rank</span>
                        <span className="ttext-label-1  font-medium text-[#FFFFF8]">{userData.profileData.rank}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile