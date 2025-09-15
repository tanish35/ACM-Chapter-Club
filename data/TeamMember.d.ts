type TeamMember = {
    honorifics?: "Dr." | "Mr." | "Mrs." | "Ms." | " Prof.";
    firstName: string;
    lastName: string;
    imageURL: string;
    post:
        | "Treasurer"
        | "Joint Treasurer"
        | "Vice Chairperson"
        | "Chairperson"
        | "Technical Head"
        | "Secretary"
        | "Joint Secretary"
        | "Public Relations Officer"
        | "Faculty Sponsor";
    linkedinURL?: string;
    githubURL?: string;
    instagramURL?: string;
    leetcodeURL?: string;
    twitterURL?: string;
};
