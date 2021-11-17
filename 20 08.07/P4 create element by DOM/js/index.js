{
    //main style 
    let main = document.body;
    main.setAttribute("id", "main");
    main.style.display = "flex";
    main.style.flexDirection = "row";
    main.style.justifyContent = "center";
    main.style.boxSizing = "border-box";

    function divContainer() {
        // div container
        let div = document.createElement("DIV");
        div.style.width = "40%";
        div.style.height = "280px";
        div.style.marginTop = "100px"
        div.style.border = "1px solid black";
        div.style.paddingTop = "5px";
        div.style.overflow = "hidden"
        div.style.paddingLeft = "10px";
        div.setAttribute("id", "container");
        document.getElementById("main").appendChild(div);
    }
    divContainer();

    function head() {
        //head
        let h1 = document.createElement("h1");
        let content = document.createTextNode("My Tasks");
        h1.appendChild(content);
        document.getElementById("container").appendChild(h1);
        h1.style.color = "red";
        h1.style.marginBottom = "10px";
        h1.style.marginTop = ""
    }
    head();

    function divList() {
        //div list
        let divList = document.createElement("DIV");
        divList.style.width = "90%";
        divList.style.height = "63%";
        divList.style.overflow = "hidden"
        divList.setAttribute("id", "containerList");
        document.getElementById("container").appendChild(divList);
    }
    divList();

    function olList() {
        // ol list  
        let ol = document.createElement("ol");
        ol.style.listStyleType = "lower-roman";
        ol.setAttribute("id", "ol");
        document.getElementById("containerList").appendChild(ol);

        function li() {
            // first row
            let li = document.createElement('li');
            li.textContent = 'user dashboard';
            li.setAttribute("id", "userDashboard");
            document.getElementById("ol").appendChild(li);


            // second row
            li = document.createElement('li');
            li.textContent = 'admin dashboard';
            li.setAttribute("id", "adminDashboard");
            document.getElementById("ol").appendChild(li);


            // third row
            li = document.createElement('li');
            li.textContent = 'authentication';
            li.setAttribute("id", "authentication");
            document.getElementById("ol").appendChild(li);
            // ul related to third row
            let ul = document.createElement('ul');
            document.getElementById('authentication').appendChild(ul);
            // li 1
            li = document.createElement('li');
            li.textContent = 'login';
            ul.appendChild(li);
            // li 2
            li = document.createElement('li');
            li.textContent = 'register';
            li.style.textDecoration = "line-through";
            ul.appendChild(li);
            // li 3
            li = document.createElement('li');
            li.textContent = 'logout';
            ul.appendChild(li);


            // fourth row
            li = document.createElement('li');
            li.textContent = 'about page';
            li.setAttribute("id", "aboutPage");
            document.getElementById("ol").appendChild(li);


            // fifth row
            li = document.createElement('li');
            li.textContent = 'content page';
            li.setAttribute("id", "contentPage");
            document.getElementById("ol").appendChild(li);
            li.style.listStylePosition = "inside"
            li.style.textDecoration = "line-through";
        }
        li();

    }
    olList();

    function input() {
        // input 
        let input = document.createElement('input');
        document.getElementById("container").appendChild(input);
        input.type = "text";
    }
    input();

    function btn() {
        // button
        let btn = document.createElement('button');
        btn.textContent = 'add task';
        btn.style.marginLeft = "3px"
        document.getElementById("container").appendChild(btn);
    }
    btn();


}
