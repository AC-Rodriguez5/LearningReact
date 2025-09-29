function CalButton({ func1, func2, func3, func4, onClick}) {


    return (
    <>
       {func1 && <button onClick={() => onClick(func1)} className={func1 === "0" ? "zero-btn" : "func1"}>{func1}</button>}
      {func2 && <button onClick={() => onClick(func2)} className="func2">{func2}</button>}
      {func3 && <button onClick={() => onClick(func3)} className="func3">{func3}</button>}
      {func4 && <button onClick={() => onClick(func4)} className="func4">{func4}</button>}
    </>
  )
}

export default CalButton