function showInput() {
    let txt = document.getElementById("input").value;
    document.getElementById("txt").innerText = txt;
    if (txt.length < 1)
    {
        document.getElementById("txt").innerText = 'Text will appear here';
    }
}