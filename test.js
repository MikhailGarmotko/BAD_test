// const str = `The Tao gave birth to machine language.  Machine language gave birth"  + "\n" +
// "to the assembler." + "\n" +
// "The assembler gave birth to the compiler.  Now there are ten thousand" + "\n" +
// "languages."+ "\n" +
// "Each language has its purpose, however humble.  Each language"+ "\n" +
// "expresses the Yin and Yang of software.  Each language has its place within"+ "\n" +
// "the Tao."+ "\n" +
// "But do not program in COBOL if you can avoid it."+ "\n" +
// "        -- Geoffrey James,"The Tao of Programming"`;

const str = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`;

const findFirstNonRepeatedChar = (str) => {
  let cash = "";
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (
      !(
        str.substring(i + 1, arr.length).includes(arr[i]) ||
        cash.includes(arr[i])
      )
    ) {
      return arr[i];
    }
    cash = cash + arr[i];
  }
};
const createNonRepeatedCharArray = (arr) => {
  const result = arr.reduce((init, next) => {
    init = [...init, findFirstNonRepeatedChar(next)];
    return init;
  }, []);
  return result;
};
const splitArray = (str) => {
  const arr = [...str.split(" ")];
  const result = createNonRepeatedCharArray(arr);

  return findFirstNonRepeatedChar(result.join());
};
console.log(splitArray(str));
