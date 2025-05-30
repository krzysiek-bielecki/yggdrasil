class Plant {
    static plants = {};

    static VCFL = new Plant('VCFL', 'vcfl', ['vcfl']);
    static VCT_BATTERY = new Plant('VCT Battery', 'vct-product', ['vctbattery', 'vct-bat', 'vctbat', 'vctb']);
    static VCT_MEGACASTING = new Plant('VCT Megacasting', 'vct-megacasting', ['vctmegacasting', 'vct-mega', 'vctmega', 'vctm']);
    static VCTZ_EDU = new Plant('VCTZ EDU', 'vctz-edu', ['vctzedu', 'vctz-edu', 'vctze']);

    constructor(name, urlPart, aliases) {
        this.name = name;
        this.urlPart = urlPart;

        aliases.forEach(value => {
            Plant.plants[value.toLowerCase()] = this;
        });
    }

    static getByQuery(query) {
        const tokens = query.toLowerCase().split(/\s+/);
        for (const token of tokens) {
            if (Plant.plants.hasOwnProperty(token)) {
                return Plant.plants[token];
            }
        }
        return undefined;
    }
}

console.log('Loaded plants:', Object.values(Plant).filter(value => value instanceof Plant).map(p => p.name).join(', '));
