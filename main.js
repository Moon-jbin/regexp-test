let str = `
010-5093-9512
the1209@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brwon fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)