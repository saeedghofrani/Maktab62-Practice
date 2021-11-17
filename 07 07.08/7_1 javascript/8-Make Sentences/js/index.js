let library = 
[
    { title: "The Road Ahead",author: "BillGates", readingStatus: true },
    { title: "Steve Jobs", author: "Walter Isaacson", readingStatus: true },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "SuzanneCollins",readingStatus: false}
]
function reading(array)
{
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        // if (!array[i].hasOwnProperty('title') || !array[i].hasOwnProperty('author') || !array[i].hasOwnProperty('readingStatus'))
        // {
        //     result += "some part of sentece don't exist"
        //     break;
        // }
        if (array[i].readingStatus === true)
        {
            result += "Already read " + array[i].title + " by " + array[i].author;
            result += "\n";
        }
        else
        {
            result += "You still need to read " + array[i].title + " by " + array[i].author;
            result += "\n";
        }
    }
    console.log(result);
}
reading(library);
