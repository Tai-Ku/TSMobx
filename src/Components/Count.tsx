import React, { useContext } from "react";
import { RootStore } from "../Store/RootStore";
import { useStore } from "../Hooks/useStore";
import { observer } from "mobx-react-lite";

const Count = observer(() => {
  const {
    rootSotre: { countStore },
  } = useStore();
  const onIncrement = () => {
    countStore.increment();
  };
  const onDecrement = () => {
    countStore.decrement();
  };
  return (
    <div>
      <div> count : {countStore.getCountValue}</div>
      <div>
        <button onClick={() => onIncrement()}>+</button>
        <button onClick={() => onDecrement()}>-</button>
      </div>
    </div>
  );
});

export default Count;

// import React from 'react'

// const Count = () => {
//   return (
//     <div>Count</div>
//   )
// }

// export default Count
