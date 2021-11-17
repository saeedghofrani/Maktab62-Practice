function removeSoLe(str) //a e i o u
{
    if (typeof(str) !== "string") {
        return "input should be string"
    } else {
        let chars = str.split("");
        let invalidChars = ['a', 'i', 'o', 'u', 'e'];
        let result = "";
        for (let i = 0; i < chars.length; i++) {
            if (!invalidChars.includes(chars[i]))
                result += chars[i];
        }
        return result;
    }
}
console.log(removeSoLe("saeedaioukkkkk"));
console.log(removeSoLe(5));