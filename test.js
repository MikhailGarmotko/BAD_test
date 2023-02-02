const str1 = `The Tao gave birth to machine language.  Machine language gave birth"  + "\n" +
"to the assembler." + "\n" +
"The assembler gave birth to the compiler.  Now there are ten thousand" + "\n" +
"languages."+ "\n" +
"Each language has its purpose, however humble.  Each language"+ "\n" +
"expresses the Yin and Yang of software.  Each language has its place within"+ "\n" +
"the Tao."+ "\n" +
"But do not program in COBOL if you can avoid it."+ "\n" +
"        -- Geoffrey James,"The Tao of Programming"`;

const str2 = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`;

const findFirstNonRepeatedCharacter = (string) => {
  let cashArray = "";
  let stringToArray = [...string];
  for (let i = 0; i < stringToArray.length; i++) {
    if (
      !(
        string
          .substring(i + 1, stringToArray.length)
          .includes(stringToArray[i]) || cashArray.includes(stringToArray[i])
      )
    ) {
      return stringToArray[i];
    }
    cashArray = cashArray + stringToArray[i];
  }
};
const createNonRepeatedCharArray = (stringsArray) => {
  const charArray = stringsArray.reduce((init, next) => {
    init = [...init, findFirstNonRepeatedCharacter(next)];
    return init;
  }, []);
  return charArray;
};
const findUniqueCharacter = (string) => {
  const stringsArray = [...string.split(" ")];
  const result = createNonRepeatedCharArray(stringsArray);
  return findFirstNonRepeatedCharacter(result.join());
};
console.log(findUniqueCharacter(str1));
console.log(findUniqueCharacter(str2));
