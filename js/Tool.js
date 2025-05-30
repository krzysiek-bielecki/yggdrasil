class Tool {
    static tools = {};

    static KIBANA = new Tool(
        'Kibana',
        'search logs in choosen environment',
        ['kibana', 'kib', 'log', 'logs'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://me.logs.volvocars.net/s/${envPart}}/app/discover#/`;
        }
    );

    static CASTLE = new Tool(
        'CASTLE',
        'castle',
        ['castle', 'cas', 'c'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://sys-app3663.apps.iod-${envPart}.volvocars.net/catalog/en/catalog`;
        }
    );

    static RED_PANDA = new Tool(
        'Red Panda',
        'red panda with kafka events',
        ['redpanda', 'rp', 'events', 'kafka'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://redpanda-console.apps.iod-${envPart}.volvocars.net/overview`;
        }
    );

    static BOP_APP = new Tool(
        'BopApp',
        'bop app',
        ['bopapp', 'bop-app', 'bops', 'ba', 'bop'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://xps-app982.apps.iod-${envPart}.volvocars.net/bop-app/en/bop-info`;
        }
    );

    static OPEN_SHIFT = new Tool(
        'OpenShift',
        'red hat OpenShift',
        ['openshift', 'os', 'opensh', 'openshit'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://console-openshift-console.apps.iod-${envPart}.volvocars.net/`;
        }
    );

    static BOARD = new Tool(
        'board',
        'sprint view',
        ['board', 'sprint'],
        (plant, env) => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_sprints/taskboard/Production%20Control%20Cars/Industrial%20Operations/`;
        }
    );

    static PIPELINES = new Tool(
        'pipelines',
        'azure pipelines',
        ['pipelines', 'pipe', 'azp', 'azure-pipelines'],
        (plant, env) => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_build`;
        }
    );

    constructor(name, description, aliases, urlFunction) {
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.urlFunction = urlFunction;

        aliases.forEach(value => {
            Tool.tools[value.toLowerCase()] = this;
        });
    }

    static getByQuery(query) {
        const tokens = query.toLowerCase().split(/\s+/);
        for (const token of tokens) {
            if (Tool.tools.hasOwnProperty(token)) {
                return Tool.tools[token];
            }
        }
        return undefined;
    }

    getUrl(plant, env) {
        return this.urlFunction(plant, env);
    }
}

console.log('Loaded tools:', Object.values(Tool).filter(value => value instanceof Tool).map(p => p.name).join(', '));