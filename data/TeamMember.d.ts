type TeamMember = {
    firstName: string;
    lastName: string;
    imageURL: string;
    post:
        | "Chair"
        | "Vice Chair"
        | "Secretary"
        | "Treasurer"
        | "Technical Lead"
        | "Membership Chair"
        | "Webmaster";
    linkedinURL?: string;
    githubURL?: string;
    instagramURL?: string;
    leetcodeURL?: string;
    twitterURL?: string;
};
