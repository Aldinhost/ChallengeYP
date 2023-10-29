/* eslint-disable react/prop-types */
import Card from "./Card/Card";

const ListCards = ({data}) => {
  return (
    <>
      {
        data.map((item) => (
          <Card key={item.name} item={item}/>
        ))
      }
    </>
  )
}

export default ListCards