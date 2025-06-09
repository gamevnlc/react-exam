function List() {
    const fruits = [
        {name: "January", calo: 1, id: 1},
        {name:"February", calo: 2, id: 2},
        {name:"March", calo: 3, id: 3},
        {name:"April", calo: 4, id: 4},
        {name:"May", calo: 5, id: 5},
        {name:"June", calo: 6, id: 6 },
    ]
    const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calo}</li>)
    return (
        <ul>{listItems}</ul>
    )
}

export default List;
