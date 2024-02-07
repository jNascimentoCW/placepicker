import { AVAILABLE_PLACES } from "../data";

export default function Places() {
    //To rotate image
    const rotationDeg = AVAILABLE_PLACES.map((place, index) => {
        if (index % 2 !== 0) return "-rotate-[5deg]";
        else return "rotate-[5deg]";
    });

    console.log(rotationDeg);

    return (
        <>
            <section className="border-2 border-[#0e373e] rounded-lg w-[70%] p-5 mt-7">
                <p className="text-2xl font-medium pb-4 text-[#8eeeff]">
                    I'd like to visit...
                </p>
                <p className="pb-3">
                    Select the places you would like to visit below.
                </p>
            </section>
            <section className="border-2 border-[#0e373e] rounded-lg w-[70%] p-10 mt-7">
                <p className="text-2xl font-medium pb-4 text-[#8eeeff]">
                    Avaliable Places
                </p>
                <div>
                    <ul className="grid grid-cols-autoFit justify-center gap-8 w-[100%]">
                        {AVAILABLE_PLACES.map((place, index) => (
                            <li
                                key={place.id}
                                className={`min-w-[19rem] rounded-xl hover:animate-slideUpFadIn`}
                            >
                                <button
                                    className={`rounded-xl cursor-auto hover:${rotationDeg[index]} hover:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] transition all delay-[0.2s] ease-in-out relative`}
                                >
                                    <img
                                        src={place.image.src}
                                        alt={place.image.alt}
                                        className="object-cover rounded-xl"
                                    />
                                    <p className="absolute bg-[#feef86] font-thin text-stone-950 rounded-sm px-1 bottom-4 right-4">
                                        {place.title}
                                    </p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
