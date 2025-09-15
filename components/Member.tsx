import SocialMediaHandleButton, {
    SocialMedia,
    SocialMediaType,
} from "./SocialMedia";

export default function Member({ member }: { member: TeamMember }) {
    return (
        <div className="flex flex-col justify-center items-center p-6 bg-white rounded-md shadow">
            <img
                src={member.imageURL}
                alt={`${member.firstName} ${member.lastName} profile picture`}
                className="object-cover w-full max-w-[192px] rounded-full shadow"
            />
            <span className="flex flex-col mt-6 justify-center items-center">
                <p className=" font-semibold text-center my-1">{member.lastName}, {member.firstName}</p>
                <p className="text-center font-medium text-gray-600 ">
                    {member.post}
                </p>
                <div className="links-container flex flex-row gap-x-3 mt-3">
                    {member.linkedinURL && (
                        <SocialMediaHandleButton
                            url={member.linkedinURL}
                            socialMedia={
                                new SocialMedia(SocialMediaType.LINKEDIN)
                            }
                        />
                    )}
                    {member.githubURL && (
                        <SocialMediaHandleButton
                            url={member.githubURL}
                            socialMedia={
                                new SocialMedia(SocialMediaType.GITHUB)
                            }
                        />
                    )}
                    {member.leetcodeURL && (
                        <SocialMediaHandleButton
                            url={member.leetcodeURL}
                            socialMedia={
                                new SocialMedia(SocialMediaType.LEETCODE)
                            }
                        />
                    )}
                    {member.twitterURL && (
                        <SocialMediaHandleButton
                            url={member.twitterURL}
                            socialMedia={
                                new SocialMedia(SocialMediaType.TWITTER)
                            }
                        />
                    )}
                </div>
            </span>
        </div>
    );
}
