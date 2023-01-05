import { useAtom } from "jotai";

import { countState } from "@/store/count.state";

const StorePage = () => {
  const [count, setCount] = useAtom(countState);

  return (
    <div>
      {count} <button onClick={() => setCount(count + 1)}>Count Up</button>
    </div>
  );
};

export default StorePage;
