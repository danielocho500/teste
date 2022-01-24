import { heroes } from "../data/heroes";
import { getRandomNumber } from "./getRandomNumber";


export const getRandomHeroes = (amount = 12) => {

    const heroesTotal = [];
    const indexes = [];

    for (let i = 1; i <= amount; i++) {
        let hero = null
        let num = 1
        while (!hero) {
            num = getRandomNumber(1, 731);
            while (indexes.includes(num)) {
                num = getRandomNumber(1, 731);
            }    

            indexes.push(num);

            hero = heroes[num];
        }

        heroesTotal.push(hero);

        
    }

    return {
        loading: false,
        error: null,
        data: heroesTotal
    }
}