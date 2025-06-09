class Application {
    static apps = {};

    static BOP_APP = new Application(
        'bop-app',
        'bop app',
        ['bopapp', 'bop-app', 'bops', 'ba', 'bop'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://xps-app982.apps.iod-${envPart}.volvocars.net/bop-app/en/bop-info/`;
        },
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://xps-app982.apps.iod-${envPart}.volvocars.net/api/bop-ui/webjars/swagger-ui/index.html`;
        }
    );

    static VIBE = new Application(
        'vibe',
        'vibe',
        ['vibe'],
        () => {
            return `lol, vibe has no UI`;
        },
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://xps-app982.apps.iod-${envPart}.volvocars.net/api/vibe/swagger-ui/index.html`;
        }
    );

    static FACTORY_LAYOUT = new Application(
        'Factory Layout',
        'factory layout',
        ['factory-layout', 'factorylayout', 'layout', 'fl', 'flayout'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://cip-app961.apps.iod-${envPart}.volvocars.net/factory-layout/en/`;
        },
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://cip-app961.apps.iod-${envPart}.volvocars.net/api/factory-layout/v3/swagger-ui/index.html`;
        }
    );

    static FLOW_SYNCHRONIZATION = new Application(
        'Flow synchronization',
        'Flow synchronization application',
        ['flow-synchronization', 'flowsynchronization', 'flow-sync', 'fsync', 'fs'],
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://cip-app961.apps.iod-${envPart}.volvocars.net/flow-synchronization/en/`;
        },
        (plant, env) => {
            let envPart = `${plant.urlPart}${env.urlSuffix}`;
            return `https://cip-app961.apps.iod-${envPart}.volvocars.net/api/flow-synchronization/swagger-ui/index.html`;
        }
    );

    constructor(name, description, aliases, uiUrlFunction, swaggerUrlFunction) {
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.uiUrlFunction = uiUrlFunction;
        this.swaggerUrlFunction = swaggerUrlFunction;

        aliases.forEach(value => {
            Application.apps[value.toLowerCase()] = this;
        });
    }

    static getByQuery(query) {
        const tokens = query.toLowerCase().split(/\s+/);
        for (const token of tokens) {
            if (Application.apps.hasOwnProperty(token)) {
                return Application.apps[token];
            }
        }
        return undefined;
    }

    getUiUrl(plant, env) {
        return this.uiUrlFunction(plant, env);
    }

    getSwaggerUrl(plant, env) {
        return this.swaggerUrlFunction(plant, env);
    }
}

console.log('Loaded apps:', Object.values(Application).filter(value => value instanceof Application).map(p => p.name).join(', '));