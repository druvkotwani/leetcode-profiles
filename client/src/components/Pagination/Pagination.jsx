
const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Pagination({ pageNo, setPageNo, totalPages }) {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">

            {/* For mobile devices */}
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div>

            {/* For larger devices */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button onClick={() => {
                            if (pageNo < 2) return;
                            setPageNo((no) => no - 1)
                        }} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            ◀️
                        </button>

                        {
                            Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => {
                                console.log(item)
                                return (
                                    <button
                                        key={item}
                                        onClick={() => setPageNo(item)}
                                        aria-current={pageNo === item ? 'page' : undefined}
                                        className={`ring-1 ring-inset ring-gray-300 relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold hover:bg-gray-800 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${pageNo === item ? 'bg-gray-500 hover:bg-gray-500 ' : 'bg-transparent'}`}
                                    >
                                        {item}
                                    </button>
                                )
                            })
                        }

                        <button onClick={() => {
                            if (pageNo > totalPages - 1) return;
                            setPageNo((no) => no + 1)
                        }} className="ring-1 ring-inset ring-gray-300 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400  hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Next</span>
                            {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                            ▶️
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
