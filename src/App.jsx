import Header from "./components/Header";
import Places from "./components/Places";

function App() {
    return (
        <div className="bg-[#201c2c] text-stone-50 h-screen flex flex-col items-center p-8 font-BricolageGrotesque text-center">
            <Header />
            <main className="w-[95%] flex flex-col items-center">
                <Places />
            </main>
        </div>
    );
}

export default App;
