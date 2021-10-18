import { useState } from "react";
import { debounce } from "../../helpers/debounce";
import { generatePerson } from "../../helpers/generatePerson";

import { Person } from "../../helpers/types";
import { SinglePerson } from "../SinglePerson";

const DISPLAY_AMOUNT = 10;

export const MoreAndMorePeople = ({ data }: { data: Person[] }) => {
  const [size, setSize] = useState(0);
  const [displayedPersons, setDisplayedPersons] = useState(data.slice(0, DISPLAY_AMOUNT));

  const debouncedHandleScroll = debounce((target: EventTarget & HTMLDivElement) => {
    const containerHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;

    const isBottom = scrollHeight - containerHeight === scrollTop;

    if(isBottom) {
      const base = size * DISPLAY_AMOUNT;

      setDisplayedPersons((dispPersons) => {
        if (displayedPersons.length < data.length) {
          return [...dispPersons, ...data.slice(base, base + DISPLAY_AMOUNT)]
        } else {
          return [...dispPersons, ...Array(DISPLAY_AMOUNT).fill("").map(() => generatePerson())]
        }
      });

      setSize(size => size + 1);
    }
  }, 50);

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    debouncedHandleScroll(e.currentTarget);
  }

  return (
    <div className="container" onScroll={e => handleScroll(e)}>
      {displayedPersons.map((person) => (
        <SinglePerson person={person} />
      ))}
    </div>
  );
};
