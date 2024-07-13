const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"h1"},"heading1"),
    React.createElement("h2",{id:"h2"},"Heading2"),
]),
React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"h1"},"heading1"),
    React.createElement("h2",{id:"h2"},"Heading2"),
]),
]);








//const heading=React.createElement("h1",{id:"headings"},"React");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);