import Link from "next/link";
export default function Projects() {
    return (
        <div className="mt-20 p-4">
        <h1 className="font-semibold text-xl text-white "> My Projects</h1>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link href="https://digesbarber.dk/" target="blank">
            <div className="bg-gray-100  p-4 shadow-xl rounded-xl hover:scale-105 transition-transform">
            <h2 className="font-semibold text-lg">Diges Barber</h2>
            <div>
                <img
                src="/digesbarber.png"
                alt="digesbarber"
                className="w-full rounded-md "
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                etiam, quam in odio. Sed etiam, quam in odio.
            </p>
            </div>
            </Link>
            <Link href="https://bolbydesign.dk/" target="blank">
            <div className="bg-gray-100  p-4 shadow-xl rounded-xl hover:scale-105 transition-transform">
            <h2 className="font-semibold text-lg">Diges Barber</h2>
            <div>
                <img
                src="/bolbydesign.png"
                alt="bolbydesign"
                className="w-full rounded-md"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                etiam, quam in odio. Sed etiam, quam in odio.
            </p>
            </div>
            </Link>
            <Link href="https://trailblaze-ab1b3e3b0e59.herokuapp.com/" target="blank">
            <div className="bg-gray-100  p-4 shadow-xl rounded-xl hover:scale-105 transition-transform">
            <h2 className="font-semibold text-lg">Diges Barber</h2>
            <div>
                <img
                src="/trailblaze.png"
                alt="trailblaze"
                className="w-full rounded-md"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                etiam, quam in odio. Sed etiam, quam in odio.
            </p>
            </div>
            </Link>
        </div>
        </div>
    );
    }