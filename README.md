# World Cup Predictor

Predict the 2026 FIFA World Cup.

## Requirements

- Node.js >= 20

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |



## AI Usage

I've used AI for various things throughout this project. 

### As a utility
E.g.
- Generating the /src/data/fixtures.js list from a screenshot of group stage games
- I used this npm library https://github.com/hampusborgos/country-flags to download every flag in the world as an svg. I then chained some AI prompts to 
  - generate a list of countries that are in our competition
  - using the countries.json in the npm library, match the 2-character country codes to our 3-character country codes
  - delete any svg that wouldn't being used
  - then rename all the SVGs with our 3-letter country codes
- Generate a small app in Gemini Canvas that would use colour theory suggest colour schemes that would go together, specifying that there needed to be a green and a yellow in there.

### As a junior dev

Delegating some more menial and boiler-plate tasks and then overseeing the result and, usually, suggesting changes before keeping them.
E.g

- Instead of manually creating React components over and over giving commands such as: 
  ```
  In the same way we created GroupStageContainer and ThirdPlaceContainer, create the following containers, each with a RoundHeading inside of it as follows:
    1. heading: Round of 32 subheading: Pick the winner of each match
    2. heading: Round of 16 subheading: Pick the winner of each match
    3. heading: Quarter Finals subheading: Pick the winner of each match
    4. heading: Semi Finals subheading: Pick the winner of each match
    5. heading: Final subheading: Pick the World Cup winner
    ```
- Describing an algorithm to get it to build a util, such as:
  ```
    In ThirdPlaceContainer, we want to have pre-selected any teams that are automatically through. The top 8 teams from third place go through but if there are ties, then those teams should not be selected and only the higher tiers should be. Create a utility in GroupTableUtils that takes in ThirdPlaceTeams and returns an object that has an array of those teams who are automatically through, those that are tied and those that are eliminated, using the following greedy algorithm. Let me know if you spot any flaws in the logic:
    1. Initialise empty arrays for the automatic, tiedForSelection, eliminated
    2. Group the teams by points, using a map
    3. Order them in descending order
    4. Starting with the highest tier, if there is room for all the whole tier, place all teams in automatic and move to next tier5. Are there spaces left? If so, check the next tier with the same rule.
    5. If there is not room for the whole tier, the whole tier goes into tiedForSelection and the remaining tiers go into eliminated
  ```


  ### General chores

  E.g. when the components folder got too large to be flat

  ```
  Can we refactor the components folder so that each component has its own folder, e.g. GroupCard/GroupCard.tsx/.css with an index.ts that exports them all
  ```

  There are summaries of the AI prompts used in the git commits

  ## Reflections

  As you've noticed, this isn't finished, but hopefully you get the idea. I think the rest of the page would have largely been following the same principles of:
  - Storing user's predictions with match numbers as a key in Context
  - Always derive any outcomes using this single source of truth, leaving smaller components largely dumb

  I think it would have been relatively trivial to finish this off (I mainly just didn't know how the Round of 32 matches were paired up in this tournament..) with maybe a bit of a gotcha on ensuring that these predictions would be cleared if any of the previous predictions were unset. 

  ### Performance

  For performance, I've preloaded some font files, and used a webp poster for the video while it's loading, based on some lighthouse recommendations bumping the score from 56% to 75%.

![Screenshot 1](public/Screenshot%202026-05-17%20at%2017.32.29.png)
![Screenshot 2](public/Screenshot%202026-05-17%20at%2017.42.04.png)

  One of the main issues was the video size, which I could compress down to a much lower bitrate. Also the SEO score is awful because I haven't added any meta data / descriptions etc. 

  ### Accessibility

  - Tabbing goes in order
  - Used aria labels where the 3 character country codes / flags were used. 

  ## Things I would add

  - Could be clearer when the next rounds are TBD that not enough predictions have been made (because maybe one has just been accidentally missed) so some kind of mild overlay and instruction to finish selected predictions in the previous round

  - Could have an automatic smooth scrollTo the next section when all selections have been done for the current section - might help a lot for mobile users, though would have to test it as it might be annoying

  - Twitter / open graph titles, cards etc meta data for social sharing - probably some kind of sharing option that will show which team you’ve predicted and a link so others can try it.

  - Storing in localstorage would have been a pretty small change and could have been localised to the context provider using a useEffect to stringify all the predictions and store as an item (removing them if reset gets called / retrieving them from localstorage on page load).

  - If I had more time, I was thinking of using the FIFA World rankings to slightly weight the randomisation of the "Pick for me". Definitely overkill, but would have been cool. https://trekhleb.medium.com/weighted-random-in-javascript-4748ab3a1500 

  - Minor, but the flag library I used didn't have a standard ratio size for flags (e.g. Switzerland's is square) and so I had to choose between cropping, squashing or just leaving as is (I just left as is)

  - On reflection, the TeamButtonLarge and TeamButton could have been refactored into one. 