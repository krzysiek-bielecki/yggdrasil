class Environment {
    static envs = {}

    static QA = new Environment(
        'QA',
        '-qa',
        ['qa', 'q']
    );

    static PROD = new Environment(
        'PROD',
        '',
        ['prod', 'p']
    );

    constructor(name, urlSuffix, aliases) {
        this.name = name;
        this.urlSuffix = urlSuffix;

        aliases.forEach(alias => {
            Environment.envs[alias.toLowerCase()] = this;
        });
    }

    static getByQuery(query) {
        const tokens = query.toLowerCase().split(/\s+/);
        for (const token of tokens) {
            if (Environment.envs.hasOwnProperty(token)) {
                return Environment.envs[token];
            }
        }
        return Environment.PROD;
    }
}

console.log('Loaded envs:', Object.values(Environment).filter(value => value instanceof Environment).map(e => e.name).join(', '));