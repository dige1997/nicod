import Image from "next/image";

export default function HeroBanner() {
    const image = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2020/12/25/04/51/polar-lights-5858656_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
    };
    const image2 = {
        backgroundImage: "url('/profile-billede.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
        width: "350px",
        borderRadius: "50%",
    };
  
    
    return (

        <div className="bg-slate-50 z-10 shadow-md">
            <div className="" style={image}>
            <div className="right-20 top-20 absolute" style={image2}>
            </div>
            <div className="top-48 left-36 absolute">
                <h1 className="text-7xl font-bold text-white ">Nicolai Dige</h1>
                <p className="text-5xl text-white">Web Developer</p>
                </div>
            </div>
        </div>



    );
}