import {
  letterPool,
  digitPool,
  symbolPool,
  similarCharacterPool,
} from "../pools";

export function generatePassword(
  letters: boolean,
  digits: boolean,
  symbols: boolean,
  similarCharacters: boolean,
  passwordLength: number
) {
  let i = 0;
  const pwCharactersArray = [];

  letters ? pwCharactersArray.push(...letterPool) : null;
  digits ? pwCharactersArray.push(...digitPool) : null;
  symbols ? pwCharactersArray.push(...symbolPool) : null;
  similarCharacters ? pwCharactersArray.push(...similarCharacterPool) : null;

  for (let i = pwCharactersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp: string | number | string[] | number[] = pwCharactersArray[i];
    pwCharactersArray[i] = pwCharactersArray[j];
    pwCharactersArray[j] = temp;
  }

  let pwArray = [];
  while (i < passwordLength) {
    pwArray.push(
      pwCharactersArray[(Math.random() * pwCharactersArray.length) | 0]
    );
    i++;
  }
  return pwArray.join("");
}
