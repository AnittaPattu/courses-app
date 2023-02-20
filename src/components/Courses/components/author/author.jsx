const Author = (props) => {
  let authorName;
  const authorsList = props.authorsList;
  authorName = authorsList.filter((author) => author.id === props.id)?.[0].name;
  return <>{authorName}</>;
};

export default Author;
