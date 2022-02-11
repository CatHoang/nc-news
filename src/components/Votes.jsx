import { useState } from "react";
import { patchArticle } from "../utils/apis";

const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const giveVote = (voteType) => {
    setVoteChange((currentVoteChange) => {
      return currentVoteChange + voteType;
    });
    patchArticle(article_id, { inc_votes: voteType }).catch((err) => {
      setVoteChange((currentVoteChange) => currentVoteChange - 1);
    });
  };
  return (
    <div>
      <button onClick={() => giveVote(1)}>👍</button>{" "}
      <p>{voteChange + votes}</p>
      <button onClick={() => giveVote(-1)}>👎</button>
    </div>
  );
};

export default Votes;
