import logoImg from "../../public/logo.png";

export default function Header() {
    return (
        <header className="flex flex-col items-center w-[95%]">
            <div className="w-[5rem] ">
                <img src={logoImg} alt="" />
            </div>
            <h1 className="text-[3.2rem] text-[#defaf8] font-semibold tracking-[1.1rem] pt-1">
                PLACEPICKER
            </h1>
            <p className="text-lg w-[23%] text-[#94aaaa] font-thin">
                Create your personal collection of places you would like to
                visit or you have visited
            </p>
        </header>
    );
}
