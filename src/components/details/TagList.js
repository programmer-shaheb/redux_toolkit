const TagList = ({ tags }) => {
  const formattedTags = tags.map((tag) => (
    <span key={tag}>
      #{tag}
      {tag !== tags[tags.length - 1] && ", "}
    </span>
  ));

  return <>{formattedTags}</>;
};

export default TagList;
