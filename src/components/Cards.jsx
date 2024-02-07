import { AVAILABLE_PLACES } from "../data";

export default function Cards({ handlePlacesToGo }) {
    //To rotate image
    const rotationDeg = AVAILABLE_PLACES.map((place, index) => {
        if (index % 2 !== 0) return "-rotate-[5deg]";
        else return "rotate-[5deg]";
    });

    return (
        <div>
            <ul className="grid grid-cols-autoFit justify-center gap-8 w-[100%]">
                {AVAILABLE_PLACES.map((place, index) => (
                    <li
                        key={place.id}
                        className={`min-w-[19rem] rounded-xl hover:animate-slideUpFadIn`}
                    >
                        <button
                            className={`rounded-xl cursor-auto hover:${rotationDeg[index]} hover:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] transition all delay-[0.2s] ease-in-out relative`}
                            onClick={() => handlePlacesToGo(place.id, place)}
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
    );
}
