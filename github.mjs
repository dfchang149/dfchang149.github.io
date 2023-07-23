import fetch from 'node-fetch';

export function getStarCount(repo) {
  console.log( "Fetching new github stargazers count…" );

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/dfchang149/"+repo)
    .then(res => res.json()) // transform to json
    .then(json => {
      // select star count only
          console.log(json.stargazers_count);
      return {
        stargazers: json.stargazers_count
      };
    });
};

/* to use in another .js file
import { getStarCount } from "./github.mjs";

const starDisplays = document.querySelectorAll('.getStars');

for (let i = 0; i < starDisplays.length; i++) {
  const starDisplay = starDisplays[i];
  let repo = starDisplay.dataset.repo;
  console.log(getStarCount(repo));
}
*/
