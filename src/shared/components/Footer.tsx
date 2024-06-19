import BraveBrowserIcon from "../icons/BraveBrowserIcon"

function Footer() {
    return (
        <div className="flex justify-end h-full gap-4 items-center">
            <span className="text-sm font-black text-zinc-600 font-mono"><em>Designed for brave browser</em></span>
            {/* brave browser svg */}
            <span>
                <BraveBrowserIcon />
            </span>
        </div>
    )
}

export default Footer