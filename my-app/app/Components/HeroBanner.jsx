import Image from "next/image";

export default function HeroBanner() {
    const image = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2020/03/19/21/25/laptop-4948834_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
    };
  
    
    return (

        <div className="bg-slate-50">
            <div className="" style={image}>
                
            </div>
        </div>



    );
}