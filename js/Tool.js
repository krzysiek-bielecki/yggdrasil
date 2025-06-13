class Tool {
    static tools = {};

    static KIBANA = new Tool(
        'Kibana',
        'search logs in choosen environment',
        ['kibana', 'kib', 'log', 'logs'],
        (plant, env, application) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            if (application !== undefined) {
                return `https://me.logs.volvocars.net/s/${envPart}/app/discover#/?_g=(filters:!(),query:(language:kuery,query:''),refreshInterval:(pause:!t,value:60000),time:(from:now%2Fd,to:now%2Fd))&_a=(columns:!(message,kubernetes.container.name),dataSource:(dataViewId:'1128806a-3696-4550-95a5-9b98c6dbb0cc',type:dataView),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,field:kubernetes.container.name,index:'1128806a-3696-4550-95a5-9b98c6dbb0cc',key:kubernetes.container.name,negate:!f,params:(query:${application.name}),type:phrase),query:(match_phrase:(kubernetes.container.name:${application.name})))),hideChart:!f,interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',asc)))`;
            }
            return `https://me.logs.volvocars.net/s/${envPart}/app/discover#/`;
        }
    );

    static REPO = new Tool(
        'Repository',
        'azure devops repositories for XPS project',
        ['repo'],
        () => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_git/XPS`;
        }
    );

    static RANDSTAD = new Tool(
        'Randstad',
        'HR tool for Polish workers',
        ['randstad', 'ranstad'],
        () => {
            return `https://mojrandstad.pl/`;
        }
    );

    static SUCCESS_FACTORS = new Tool(
        'SuccessFactors',
        'yet another HR tool, global one',
        ['successfactors', 'sf', 'sfactors', 'sucfac', 'sucf'],
        () => {
            return `https://performancemanager5.successfactors.eu/sf/home?bplte_company=C0000870892P`;
        }
    );

    static BACKSTAGE = new Tool(
        'castle-tech-docs',
        'castle-tech-docs on backstage',
        ['backstage', 'techdocs'],
        () => {
            return `https://backstage.volvocars.biz/docs/default/component/castle-tech-docs/`;
        }
    );

    static INTRANET = new Tool(
        'intranet',
        'Volvo Cars intranet',
        ['intranet', 'intra'],
        () => {
            return `https://intranet.volvocars.net/`;
        }
    );

    static BUSINESS_PARK_ISSUES = new Tool(
        'business park issues form',
        'form to report issues in business park (KRK)',
        ['issues-form', 'issuesform'],
        () => {
            return `https://forms.office.com/pages/responsepage.aspx?id=bnb6gUmjZ0iL9Ks14lCgj-FfZ1h9WbpBvbTMhLYxmA5UNkdRRkxQVUQ1RkdGNFhHUlZWMUxITEVUNi4u/`;
        }
    );

    static CATS = new Tool(
        'cats',
        'time reporting application',
        ['cats'],
        () => {
            return `https://mysapfiori.volvocars.biz/`;
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

    static UI = new Tool(
        'UI',
        'ui application',
        ['ui'],
        (plant, env, application) => {
            return application.getUiUrl(plant, env);
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
        () => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_sprints/taskboard/Production%20Control%20Cars/Industrial%20Operations/`;
        }
    );

    static PIPELINES = new Tool(
        'pipelines',
        'azure pipelines',
        ['pipelines', 'pipe', 'azp', 'azure-pipelines'],
        () => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_build`;
        }
    );

    static PULL_REQUESTS = new Tool(
        'pull requests',
        'pull requests in Azure DevOps',
        ['pr', 'prs', 'pullrequests', 'pullrequests', 'pull-requests'],
        () => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_git/XPS/pullrequests`;
        }
    );

    static ESTIMATIONS = new Tool(
        'estimations',
        'estimation sessions in Azure DevOps',
        ['estimations', 'estimate', 'estimates', 'est'],
        () => {
            return `https://volvocargroup.visualstudio.com/Industrial%20Operations/_apps/hub/ms-devlabs.estimate.estimate-hub#/session/jr3ik/PC_Cars%20estimation%20session`;
        }
    );

    static CHAT_GPT = new Tool(
        'chat GPT',
        'chat gpt',
        ['chatgpt', 'chat-gpt', 'gpt', 'chat'],
        () => {
            return `https://chatgpt.com`;
        }
    );

    static PERPLEXITY = new Tool(
        'perplexity',
        'yet another AI tool',
        ['perplex', 'perplexity', 'perai'],
        () => {
            return `https://www.perplexity.ai`;
        }
    );

    static SWAGGER = new Tool(
        'Swagger',
        'swagger for given application',
        ['swagger'],//rather unused
        (plant, env, application) => {
            return application.getSwaggerUrl(plant, env);
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

    getUrl(plant, env, application) {
        return this.urlFunction(plant, env, application);
    }
}

console.log('Loaded tools:', Object.values(Tool).filter(value => value instanceof Tool).map(p => p.name).join(', '));