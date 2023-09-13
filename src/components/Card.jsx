const Card = ({ item }) => {
  const { name, description, image_url } = item
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg flex flex-col items-center mb-9">
      <img
        className="md:w-4/12 max-h-48 object-contain mb-3"
        src={image_url}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}

export default Card
