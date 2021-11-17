{
    const parent = document.getElementById('parent').innerText
    document.getElementById('copyP').addEventListener("click", function () {
        document.getElementById("txt").innerHTML += parent;
    }, { capture: true, passive: true })
    document.getElementById('copyC').addEventListener("click", function () {
        let child = document.getElementById('child').innerText
        document.getElementById("txt").innerText += `${child}`;
    })
}
