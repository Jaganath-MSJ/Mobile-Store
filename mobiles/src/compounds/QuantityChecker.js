
export default function QuantityChecker({current, add, sub}) {
    return (
        <div>
            <button onClick={add(current)}>-</button>
            {current}
            <button onClick={sub(current)}>+</button>
        </div>
    )
}