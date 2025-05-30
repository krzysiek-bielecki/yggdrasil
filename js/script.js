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

function redirect() {
    // Z mapą narzędzi do subdomen lub ścieżek, jak trzeba
    const toolMap = {
        logs: 'kibana',
        repo: 'gitlab',
        pr: 'github',
    };

    // Lista dozwolonych środowisk
    const environments = ['dev', 'qa', 'prod'];

    // Pobierz parametr q z URL
    const queryParams = new URLSearchParams(window.location.search);
    const q = queryParams.get('q');

    if (!q) return; // brak parametru - nic nie rób

    const tokens = q.toLowerCase().split(/\s+/); // np. ['dev', 'logs']

    // Znajdź środowisko i narzędzie
    const env = tokens.find(token => environments.includes(token));
    const tool = tokens.find(token => toolMap.hasOwnProperty(token));

    if (!env || !tool) return; // nie znaleziono poprawnych wartości

    // Stwórz adres
    const targetHost = `${toolMap[tool]}.${env}.pl`;
    console.log(targetHost);

    // Przekierowanie
    // window.location.href = `https://${targetHost}`;
}

logQParamSplitBySpace();
// redirect()