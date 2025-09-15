import { coreTeam } from "../data/CoreTeam";
import Member from "./Member";

export default function Team() {
    return (
        <section id="team" className="p-16 my-10 bg-gray-50">
            <h1 className="mb-10  text-5xl font-medium  drop-shadow-sm">
                Our Team
            </h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {coreTeam.map((member) => {
                    return <Member key={member.linkedinURL} member={member} />;
                })}
            </div>
        </section>
    );
}
