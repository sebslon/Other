import { useEffect, useRef } from "react";

import { MemoStateCheckContainer } from "./styles";
import { useMemoState } from "./hooks/useMemoState";

export const useMemoStateCheck = () => {
  const [state, setState] = useMemoState({ val: 0 });
  const renders = useRef(0);

  useEffect(() => {
    renders.current++;
  })

  return (
    <MemoStateCheckContainer>
      <button onClick={() => setState({ val: 3 })}>Check useMemoState</button>
      <button onClick={() => setState({ val: 7 })}>
        Check with another state
      </button>
      <p>Actual state: {JSON.stringify(state)}</p>
      <p>Renders: {renders.current}</p>
    </MemoStateCheckContainer>
  );
};
