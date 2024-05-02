export const List_Fleets = ({ className, data }) => {
  return (
    <ul className="space-y-3">
      {data.map((list, i) => (
        <li key={i} className={`text-sm md:text-base px-3 py-px text-nowrap ${className}`}>
          {list.info}
        </li>
      ))}
    </ul>
  )
}