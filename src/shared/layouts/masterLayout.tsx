import SearchBar from "../../components/SearchBar"
import ShortLinks from "../../components/ShortLinks/ShortLinks"
import Skills from "../../components/skills/skills"
import Footer from "../components/Footer"

function MasterLayout() {
    return (
        <>
        <div className="w-[100vw] h-[100vh] grid grid-rows-12 gap-4 px-12 pt-16 pb-2">
            {/* header for skills */}
            <header className="row-span-3 overflow-hidden">
                <Skills />
            </header>
            {/* search bar */}
            <div className="w-full h-full">
                <SearchBar />
            </div>
            {/* shortLinks */}
            <main className="h-full w-full row-span-6 px-[200px] pt-10 ">
                <ShortLinks />
            </main>
            {/* just for covering stuff */}
            <div />
            <footer>
                <Footer />
            </footer>
        </div>
        </>
    )
}

export default MasterLayout