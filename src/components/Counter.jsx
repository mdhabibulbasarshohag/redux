import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {

    const { count } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    console.log(count);

    return (
        <div className=" bg-blue-500 p-10 rounded-xl">
            <div className="">
                <button className="border-2 border-black p-2 rounded-lg bg-slate-100" onClick={() => dispatch(incrementByValue(5))}>increment by 5</button>
            </div>
            <button className=" border-2 p-2 border-red-500 bg-purple-500 rounded-lg my-4" onClick={() => dispatch(increment())} >increment</button>
            <div>
                <h1 className="text-9xl text-white font-bold">{count}</h1>
            </div>
            <button className=" border-2 p-2 border-red-500 bg-purple-500 rounded-lg my-4" onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;