
const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Pagination({ pageNo, setPageNo, totalPages }) {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">



            {/* For larger devices */}
            <div className="flex flex-1 items-center justify-center">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {
                            pageNo > 1 && <button onClick={() => setPageNo((no) => no - 1)} className="ring-1 ring-inset ring-gray-300 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 bg-[#0e0e0e]  hover:bg-[#292829]  focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Previous</span>
                                {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                                ◀️
                            </button>
                        }

                        {
                            Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => {
                                return (
                                    <button
                                        key={item}
                                        onClick={() => setPageNo(item)}
                                        aria-current={pageNo === item ? 'page' : undefined}
                                        className={`ring-1 ring-inset ring-gray-300 relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold hover:bg-[#292829]  text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${pageNo === item ? 'bg-[#292829] hover:bg-[#292829] ' : 'bg-[#0e0e0e]'}`}
                                    >
                                        {item}
                                    </button>
                                )
                            })
                        }

                        {
                            pageNo < totalPages && <button onClick={() => setPageNo((no) => no + 1)} className="ring-1 ring-inset ring-gray-300 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 bg-[#0e0e0e]  hover:bg-[#292829]  focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                                ▶️
                            </button>
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
