import { useState } from "react";

import { Person } from "../../types";
import { debounce } from "../../helpers/debounce";
import { generatePerson } from "../../helpers/generatePerson";

import { SinglePerson } from "../SinglePerson";

const DISPLAY_AMOUNT = 10;

export const MoreAndMorePeople = ({ data }: { data: Person[] }) => {
  const [size, setSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedPersons, setDisplayedPersons] = useState(
    data.slice(0, DISPLAY_AMOUNT)
  );

  const debouncedHandleScroll = debounce((target: HTMLDivElement) => {
    const containerHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;

    const isBottom = scrollHeight - containerHeight === scrollTop;

    if (isBottom) {
      const base = size * DISPLAY_AMOUNT;

      setIsLoading(true);

      setTimeout(() => {
        setDisplayedPersons((persons) => {
          if (displayedPersons.length < data.length) {
            return [...persons, ...data.slice(base, base + DISPLAY_AMOUNT)];
          } else {
            const newPersons = Array(DISPLAY_AMOUNT)
              .fill("")
              .map(() => generatePerson());

            return [...persons, ...newPersons];
          }
        });

        setSize((size) => size + 1);
        setIsLoading(false);
      }, 2000);
    }
  }, 50);

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    debouncedHandleScroll(e.currentTarget);
  }

  return (
    <div className="list" onScroll={(e) => handleScroll(e)}>
      {displayedPersons.map((person, idx) => (
        <SinglePerson person={person} key={idx} />
      ))}
      {isLoading ? <div className="list__loader"></div> : null}
      {/* {isLoading ? <p className="list__loading">Loading...</p> : null} */}
    </div>
  );
};
