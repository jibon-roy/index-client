import moment from "moment";
import { useState } from "react";


const SearchBar = () => {
    const [input, setInput] = useState(null);
    console.log(input)

    // Submit form
    const submitForm = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const searchText = form.search.value
        const currentTime = moment.utc();
        const date = currentTime.format('YYYY-MM-DD HH:mm:ss')
        const searchData = { searchText, date }
        setInput(searchData)
    }

    return (
        <form onSubmit={submitForm} className="flex w-full box-border px-2 items-center justify-center">
            <div className="border border-solid border-primary-blue">
                <div className="flex">
                    <div className="flex w-10 items-center justify-center rounded-bl-lg border-r border-gray-200 bg-white">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input id='search' name="search" type="search" className="w-full h-8  max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" />
                    <input type="submit" value="Search" className="cursor-pointer px-2 h-8 text-white font-semibold bg-primary-blue hover:bg-secondary-blue transition-colors" />
                </div>
            </div>
        </form>

    );
};

export default SearchBar;