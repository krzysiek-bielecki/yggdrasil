function powitanie() {
    alert("Witaj na mojej stronie!");
}

function logQParamSplitBySpace() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q !== null) {
        let plant = Plant.getByQuery(q);
        let env = Environment.getByQuery(q);
        let tool = Tool.getByQuery(q);
        console.log(plant)
        console.log(env)
        console.log(tool)
        console.log(tool.getUrl(plant, env));
        window.location.href = tool.getUrl(plant, env);
    } else {
        console.log('Parameter "q" not found');
    }
}

function renderToolTable(tools) {
    const table = document.createElement('table');

    const header = table.insertRow();
    ['Name', 'Description', 'Aliases'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        header.appendChild(th);
    });

    tools.forEach(tool => {
        console.log(tool);
        const row = table.insertRow();
        row.insertCell().textContent = tool.name;
        row.insertCell().textContent = tool.description;
        row.insertCell().textContent = tool.aliases.join(', ');
    });

    document.getElementById('tool-table').appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
    const tools = Object.values(Tool).filter(value => value instanceof Tool);
    renderToolTable(tools);
});


logQParamSplitBySpace();
