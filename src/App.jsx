import Header from "./components/Header";

import forestWaterfall from "./assets/forest-waterfall.jpg";

function App() {
    return (
        <div className="bg-[#201c2c] text-stone-50 h-screen flex flex-col items-center p-8 font-BricolageGrotesque text-center">
            <Header />
            <main className="w-[95%] flex flex-col items-center">
                <section className="border-2 border-[#0e373e] rounded-lg w-[68%] p-5 mt-7">
                    <p className="text-2xl font-medium pb-4 text-[#8eeeff]">
                        I'd like to visit...
                    </p>
                    <p className="pb-3">
                        Select the places you would like to visit below.
                    </p>
                </section>
                <section className="border-2 border-[#0e373e] rounded-lg w-[68%] p-10 mt-7">
                    <p className="text-2xl font-medium pb-4 text-[#8eeeff]">
                        Avaliable Places
                    </p>
                    <div className="grid grid-cols-autoFit gap-8 w-[100%]">
                        <div className="w-[19rem] rounded-xl relative ">
                            <img
                                src={forestWaterfall}
                                alt=""
                                className="object-cover rounded-xl"
                            />
                            <p className="absolute bg-[#feef86] font-thin text-stone-950 rounded-sm px-1 bottom-4 right-4">
                                Forest Waterfall
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
