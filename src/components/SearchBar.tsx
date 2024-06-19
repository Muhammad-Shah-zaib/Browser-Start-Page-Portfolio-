function SearchBar() {
    return (
        <form className="w-full h-full px-[300px]" target="_blank" action="https://www.google.com/search" method="get">
            <div className="relative flex">
                <input id="query" name="q" type="text" className="group outline-none focus:shadow-md focus:border-zinc-500 shadow-black transition-all duration-200 w-full h-full rounded-3xl border-2 border-zinc-600 bg-transparent py-1.5 px-10" placeholder="Search.." />
                <button type="submit" className="h-[32px] absolute top-0.5 right-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.268 22.78C26.892 23.234 27.3 23.968 27.3 24.8C27.3 26.18 26.18 27.3 24.8 27.3C23.968 27.3 23.234 26.892 22.78 26.268V26.272L19.118 22.61C20.564 21.77 21.77 20.564 22.61 19.118L26.272 22.778H26.268V22.78Z" fill="white" />
                        <path d="M23.904 14.302C23.904 16.056 23.432 17.702 22.61 19.118L19.1 15.608L18.672 16.036C18.886 15.5 19.004 14.914 19.004 14.302C19.004 11.704 16.898 9.6 14.302 9.6C11.706 9.6 9.6 11.704 9.6 14.302C9.6 16.9 11.704 19.004 14.302 19.004C14.914 19.004 15.5 18.886 16.036 18.672L15.608 19.1L19.118 22.61C17.702 23.432 16.056 23.904 14.302 23.904C8.998 23.904 4.7 19.604 4.7 14.302C4.7 9 8.998 4.7 14.302 4.7C19.606 4.7 23.904 8.998 23.904 14.302V14.302Z" fill="white" />
                        <path d="M19.1 15.608L22.61 19.118C21.77 20.564 20.564 21.77 19.118 22.61L15.608 19.1L16.036 18.672C17.238 18.196 18.196 17.238 18.672 16.036L19.1 15.608V15.608Z" fill="white" />
                    </svg>
                </button>
                {/* search icon svg */}
                <span className="absolute left-2 top-[0.190rem] pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        fill="none"
                        viewBox="0 0 58 60"
                    >
                        <mask
                            id="mask0_202_333"
                            style={{ maskType: "luminance" }}
                            width="58"
                            height="60"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                        >
                            <path
                                fill="#fff"
                                d="M56.867 24.667H29.533V36h15.734c-1.467 7.2-7.6 11.333-15.734 11.333C19.933 47.333 12.2 39.6 12.2 30c0-9.6 7.733-17.333 17.333-17.333 4.134 0 7.867 1.466 10.8 3.866L48.867 8C43.667 3.467 37 .667 29.533.667A29.249 29.249 0 00.2 30a29.249 29.249 0 0029.333 29.333c14.667 0 28-10.666 28-29.333 0-1.733-.266-3.6-.666-5.333z"
                            ></path>
                        </mask>
                        <g mask="url(#mask0_202_333)">
                            <path
                                fill="currentColor"
                                className="group-hover:text-[#FBBC05] text-zinc-600"
                                d="M-2.467 47.333V12.667L20.2 30-2.467 47.333z"
                            ></path>
                        </g>
                        <mask
                            id="mask1_202_333"
                            style={{ maskType: "luminance" }}
                            width="58"
                            height="60"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                        >
                            <path
                                fill="#fff"
                                d="M56.867 24.667H29.533V36h15.734c-1.467 7.2-7.6 11.333-15.734 11.333C19.933 47.333 12.2 39.6 12.2 30c0-9.6 7.733-17.333 17.333-17.333 4.134 0 7.867 1.466 10.8 3.866L48.867 8C43.667 3.467 37 .667 29.533.667A29.249 29.249 0 00.2 30a29.249 29.249 0 0029.333 29.333c14.667 0 28-10.666 28-29.333 0-1.733-.266-3.6-.666-5.333z"
                            ></path>
                        </mask>
                        <g mask="url(#mask1_202_333)">
                            <path
                                fill="currentColor"
                                className="group-hover:text-#EA4335 text-zinc-600"
                                d="M-2.467 12.667L20.2 30l9.333-8.133 32-5.2V-2h-64v14.667z"
                            ></path>
                        </g>
                        <mask
                            id="mask2_202_333"
                            style={{ maskType: "luminance" }}
                            width="58"
                            height="60"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                        >
                            <path
                                fill="#fff"
                                d="M56.867 24.667H29.533V36h15.734c-1.467 7.2-7.6 11.333-15.734 11.333C19.933 47.333 12.2 39.6 12.2 30c0-9.6 7.733-17.333 17.333-17.333 4.134 0 7.867 1.466 10.8 3.866L48.867 8C43.667 3.467 37 .667 29.533.667A29.249 29.249 0 00.2 30a29.249 29.249 0 0029.333 29.333c14.667 0 28-10.666 28-29.333 0-1.733-.266-3.6-.666-5.333z"
                            ></path>
                        </mask>
                        <g mask="url(#mask2_202_333)">
                            <path
                                fill="currentColor"
                                className="group-hover:text-#34A853 text-zinc-600"
                                d="M-2.467 47.333l40-30.666L48.067 18 61.533-2v64h-64V47.333z"
                            ></path>
                        </g>
                        <mask
                            id="mask3_202_333"
                            style={{ maskType: "luminance" }}
                            width="58"
                            height="60"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                        >
                            <path
                                fill="#fff"
                                d="M56.867 24.667H29.533V36h15.734c-1.467 7.2-7.6 11.333-15.734 11.333C19.933 47.333 12.2 39.6 12.2 30c0-9.6 7.733-17.333 17.333-17.333 4.134 0 7.867 1.466 10.8 3.866L48.867 8C43.667 3.467 37 .667 29.533.667A29.249 29.249 0 00.2 30a29.249 29.249 0 0029.333 29.333c14.667 0 28-10.666 28-29.333 0-1.733-.266-3.6-.666-5.333z"
                            ></path>
                        </mask>
                        <g mask="url(#mask3_202_333)">
                            <path
                                fill="currentColor"
                                className="group-hover:text-#4285F4 text-zinc-600"
                                d="M61.533 62L20.2 30l-5.333-4 46.666-13.333V62z"
                            ></path>
                        </g>
                    </svg>
                </span>
            </div>
        </form>
    )
}

export default SearchBar