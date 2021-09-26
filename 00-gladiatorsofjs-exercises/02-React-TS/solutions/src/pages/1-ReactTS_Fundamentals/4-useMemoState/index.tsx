import { useMemoState } from "./hooks/useMemoState";

export const useMemoStateCheck = () => {
  const [state, setState] = useMemoState({ val: 0 });

  console.log("RENDER", state);

  return (
    <div>
      <p>Check console</p>
      <button onClick={() => setState({ val: 3 })}>Check useMemoState</button>
      <button onClick={() => setState({ val: 7 })}>
        Check with another state
      </button>
    </div>
  );
};
