import { coreTeam } from "../data/CoreTeam";
import { mlTeam } from "../data/mlTeam";
import { webDevTeam } from "../data/webDevTeam";
import { web3Team } from "../data/web3Team";
import Member from "./Member";

export default function Team() {
    return (
        <section id="team" className="p-16 my-10 bg-gray-50">
            <h1 className="mb-10  text-5xl font-medium  drop-shadow-sm">
                Our Team
            </h1>

            {/* Core Team */}
            <div className="mb-16">
                <h2 className="mb-6 text-3xl font-medium">Core Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {coreTeam.map((member) => {
                        return <Member key={member.linkedinURL} member={member} />;
                    })}
                </div>
            </div>

            {/* Web3 Team */}
            <div className="mb-16">
                <h2 className="mb-6 text-3xl font-medium">Web3 Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {web3Team.map((member) => {
                        return <Member key={member.linkedinURL} member={member} />;
                    })}
                </div>
            </div>

            {/* Web Dev Team */}
            <div className="mb-16">
                <h2 className="mb-6 text-3xl font-medium">Web Dev Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {webDevTeam.map((member) => {
                        return <Member key={member.linkedinURL} member={member} />;
                    })}
                </div>
            </div>

            {/* ML Team */}
            <div className="mb-16">
                <h2 className="mb-6 text-3xl font-medium">ML Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {mlTeam.map((member) => {
                        return <Member key={member.linkedinURL} member={member} />;
                    })}
                </div>
            </div>

            

            
        </section>
    );
}
