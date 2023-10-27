const NameCard = ({ name }: { name: string }) => {
  function capitalizeFirstChar(str: string) {
  if (str.length === 0) {
    return str;
  }
  const firstChar = str.charAt(0).toUpperCase(); 
  return firstChar + str.slice(1); 
}
  return <div className="name_card">{capitalizeFirstChar(name)}</div>;
};
export default NameCard;
