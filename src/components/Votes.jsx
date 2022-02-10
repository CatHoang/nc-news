import { useEffect, useState } from "react";
import { patchArticle } from "../utils/apis";

const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const giveVote = (voteType) => {
    setVoteChange((currentVoteChange) => {
      return currentVoteChange + voteType;
    });
    patchArticle(article_id, { inc_votes: voteType })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={() => giveVote(1)}>upVote</button>
      <p>{voteChange + votes}</p>
      <button onClick={() => giveVote(-1)}>downVote</button>
    </div>
  );
};

export default Votes;
