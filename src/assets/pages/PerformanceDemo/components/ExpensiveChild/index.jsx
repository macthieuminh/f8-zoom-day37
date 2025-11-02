import React, { useMemo } from "react"

const ExpensiveChild = React.memo(({ items }) => {
    console.log("Expensive Child đã mount 3️⃣")

    // Có dùng useMemo
    const expensiveCalculation = useMemo(() => {
        console.log("Hàm tính toán có dùng Memo...")
        let longest = ""
        items.forEach((item) => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 100000; i++) {}
            if (item.name.length > longest.length) {
                longest = item.name
            }
        })
        return longest
    }, [items])

    // Không dùng useMemo
    const ExpensiveChildWithoutMemo = (() => {
        console.log("Hàm tính toán không dùng Memo...")
        let longest = ""
        items.forEach((item) => {
            for (let i = 0; i < 100000; i++) {}
            if (item.name.length > longest.length) {
                longest = item.name
            }
        })
        return longest
    })()
    const length = items.length
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <p>Total: {length} users</p>
            <p>(useMemo): {expensiveCalculation}</p>
            <p>(no memo): {ExpensiveChildWithoutMemo}</p>
        </div>
    )
})

export default ExpensiveChild
