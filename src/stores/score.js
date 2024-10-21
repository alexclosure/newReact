import { defineStore } from "pinia";
const baseLevelScore = 25;

const levels = new Array(15)
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i));

function computeLevelByScore(score) {
  for (let [i, value] of levelScores.entries()) {
    if (score <= value) {
      return {
        level: i,
        value: levels[i],
      };
    }
  }
}
console.log(levels);
const levelScores = levels.map((_, level) => {
  let sum = 0;
  for (let [index, value] of levels.entries()) {
    if (index >= level) {
      return sum + value;
    }
    sum += value;
  }
  return sum;
});
export const useScoreStore = defineStore("score", {
  state: () => ({
    score: 0,
  }),
  getters: {
    level: (state) => computeLevelByScore(state.score),
    currentScore(state) {
      if (this.level.level === 0) {
        return state.score;
      }
      return state.score - levelScores[this.level.level - 1];
    },
  },
  actions: {
    add(score = 1) {
      this.score += score;
    },
  },
});
