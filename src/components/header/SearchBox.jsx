import React from "react";

export default function SearchBox() {
  return (
    <section className="mt-12 text-slate-300">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          className="w-full bg-slate-600 text-2xl p-3 border-slate-900 border-4 rounded-md outline-none placeholder:text-slate-500 placeholder:text-base"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 16 16"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </section>
  );
}
