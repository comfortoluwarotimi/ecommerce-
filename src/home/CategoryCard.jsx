const CategoryCard = ({ category }) => {
  return (
    <div className={`${category.color} p-8 text-center hover:shadow-lg transition cursor-pointer`}>
      <div className="text-6xl mb-4">{category.image}</div>
      <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
      <p className="text-blue-600 text-sm">{category.subtitle}</p>
    </div>
  );
};
export default CategoryCard;