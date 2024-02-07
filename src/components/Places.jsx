import { useState } from "react";

import Cards from "./Cards";

export default function Places() {
    const [placesToGo, setPlacesToGo] = useState({
        places: [],
    });

    function handlePlacesToGo(id, place) {
        const checkPlacesId = placesToGo.places.some(
            (place) => place.id === id
        );

        if (placesToGo.places.length === 0 || !checkPlacesId) {
            const placesToAdd = { ...place };

            setPlacesToGo((prevState) => {
                return {
                    ...prevState,
                    places: [placesToAdd, ...prevState.places],
                };
            });
        }
    }

    let replacePlacesToVisit =
        "Select the places you would like to visit below.";

    if (placesToGo.places.length !== 0) {
        replacePlacesToVisit = "PLACES";
    }

    return (
        <>
            <section className="border-2 border-[#0e373e] rounded-lg w-[70%] p-5 mt-7">
                <p className="text-2xl font-medium pb-4 text-[#8eeeff]">
                    I'd like to visit...
                </p>
                <p className="pb-3">{replacePlacesToVisit}</p>
            </section>
            <section className="border-2 border-[#0e373e] rounded-lg w-[70%] p-10 mt-7">
                <p className="text-2xl font-medium pb-4 text-[#8eeeff]">
                    Avaliable Places
                </p>
                <Cards handlePlacesToGo={handlePlacesToGo} />
            </section>
        </>
    );
}
