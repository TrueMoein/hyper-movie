import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fench } from "../../../services/fench";
import Movie from "./items/Movie";
import Person from "./items/Person";
import TV from "./items/TV";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await fench("search/multi", {
          params: {
            query,
          },
        });
        setSearchResult(data.results);
      } else {
        setSearchResult([]);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  function showItem(item) {
    switch (item.media_type) {
      case "tv":
        return <TV key={item.id} item={item} />;
      case "person":
        return <Person key={item.id} item={item} />;
      case "movie":
        return <Movie key={item.id} item={item} />;
    }
  }

  return (
    <section className="mt-12 text-slate-200">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          className="w-full bg-slate-600 text-2xl p-3 border-slate-900 border-4 rounded-md outline-none placeholder:text-slate-500 placeholder:text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className={`flex flex-col gap-2 p-2 bg-opacity-95 bg-slate-600 border-slate-900 border-4 border-t-0 absolute w-full z-10 rounded-md transition-all duration-200 text-gray-800 ${
            searchResult.length && query
              ? "max-h-[300px] overflow-auto"
              : "h-0 overflow-hidden opacity-0"
          }`}
        >
          {searchResult.map((item) => (
            <div
              className="border-b-2 border-slate-700 border-opacity-30 pb-2"
              onClick={() => setSearchResult([])}
            >
              {showItem(item)}
            </div>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 16 16"
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </section>
  );
}
