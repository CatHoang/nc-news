import { useState } from "react";
import { patchArticle } from "../utils/apis";

const Votes = (votes, article_id) => {
  const [voteChange, setVoteChange] = useState(0);

  const giveVote = () => {
    setVoteChange((currChange) => currChange + 1);
    patchArticle(article_id).catch((err) => {
      setVoteChange((currChange) => currChange - 1);
    });
  };
  return (
    <button
      onClick={() => {
        giveVote();
      }}
    >
      vote {votes + voteChange}
    </button>
  );
};

export default Votes;
