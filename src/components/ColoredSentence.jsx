export default function ColoredSentence({ text }) {
    return (
      <>
        {text.split(" ").map((word, index) => {
          if (index === 1) {
            return <span className="text-blue" key={index}>{word} </span>;
          }
          return <span key={index}>{word} </span>;
        })}
      </>
    );
  }
  