const NestedList = () => {
  const data = [
    {
      category: "fruits",
      items: ["Apple", "Banana", "Strawberry"]
    },
    {
      category: "vegetables",
      items: ["Carrot", "Beetroot", "Okra"]
    }
  ]

  return (
    <div>
      {data.map((group, index) => (
        <div key={group.category}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item, index) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList;
