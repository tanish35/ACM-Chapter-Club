import Link from "next/link";

export default function About() {
    return (
        <section
            id="about"
            className="grid grid-cols-1 gap-16 lg:grid-cols-2 p-16 mt-10"
        >
            <div className="">
                <h1 className="mb-10 text-5xl font-medium drop-shadow-sm">
                    About Us
                </h1>
                <p className="mx-auto  text-gray-700 text-justify">
                    Jadavpur University Student Chapter is an auxiliary
                    institution of ACM that aims to solve the difficulties of
                    future in the presesnt with technical proficiency. We
                    emphasise on bringing together ignited minds and contribute
                    towards the scientific development of the computing
                    community through various workshops, webinars, coding
                    competitions and much more.
                </p>

                <span className="flex mt-8 gap-x-4">
                    <Link
                        href={"/events"}
                        className="px-5 py-4 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        View Events
                    </Link>
                    <Link
                        href={"/register"}
                        className="px-5 py-4 text-sm font-medium text-center text-blue-700 border border-blue-700 rounded-lg hover:text-white hover:bg-blue-700 min-w-[120px]"
                    >
                        Join Us
                    </Link>
                </span>
            </div>
            <div className="mapouter h-full">
                <iframe
                    className="w-full h-full min-h-[360px]"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=jadavpur%20university,%20salt%20Lake&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                />
            </div>
        </section>
    );
}
