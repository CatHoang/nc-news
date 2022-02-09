import { useEffect, useState } from "react";
import { patchArticle } from "../utils/apis";

const Votes = ({ votes, article_id }) => {
  console.log(">>>>>>>>", votes);
  const [voteChange, setVoteChange] = useState(votes);

  const giveVote = (voteType) => {
    console.log("vote change in give cote", voteChange);
    const newVote = voteType === "up" ? voteChange + 1 : voteChange - 1;
    console.log("vote change after", newVote);
    setVoteChange(newVote);

    patchArticle(article_id, { inc_votes: newVote })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={() => giveVote("up")}>upVote</button>
      <p>{voteChange}</p>
      <button onClick={() => giveVote("down")}>downVote</button>
    </div>
  );
};

export default Votes;
