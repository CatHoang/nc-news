import { useState } from "react";
import { patchArticle } from "../utils/apis";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

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
    <div className="votes-container">
      <button onClick={() => giveVote(1)}>
        <AiOutlineArrowUp />
      </button>
      <p>{String(voteChange + votes)}</p>
      <button onClick={() => giveVote(-1)}>
        <AiOutlineArrowDown />
      </button>
    </div>
  );
};

export default Votes;
