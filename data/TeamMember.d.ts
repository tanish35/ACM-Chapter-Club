type TeamMember = {
    honorifics?: string; 
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
        | "Webmaster"
        | "Faculty Sponsor";
    linkedinURL?: string;
    githubURL?: string;
    instagramURL?: string;
    leetcodeURL?: string;
    twitterURL?: string;
};