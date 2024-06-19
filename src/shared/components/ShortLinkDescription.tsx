
interface props {
    title: string;
    description: string;
}
function ShortLinkDescription({title, description}: props) {
    return (
        <div className="flex flex-col gap-4 pl-4 pr-1 h-full py-2">
            <h1 className="text-4xl font-medium text-zinc-500">{title}</h1>
            <p className="text-lg font-mono font-bold text-zinc-400">{description}</p>
        </div>
    )
}

export default ShortLinkDescription