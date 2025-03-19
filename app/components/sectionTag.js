const SectionTag = ({ text }) => {
  return (
    <div className="sectionTag">
      <div className="sectionTag__circle"></div>
      <div className="sectionTag__text">{text}</div>
    </div>
  );
};

export default SectionTag;
