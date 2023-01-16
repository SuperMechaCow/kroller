const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/database.db");
const {
    getWahaDatasheet,
    getWahaDsheetModels,
    getWahaDsheetWeapons
} = require("./Connectors/SqliteConnector");



let buildDatasheet = async () => {
    let dSheet = await getWahaDatasheet("Intercessor Squad", "SM");
    dSheet.models = await getWahaDsheetModels(dSheet.id)
    // Add extra data to models
    for (const model of dSheet.models) {
        model.wargear = [];
    }
    dSheet.wargear = await getWahaDsheetWeapons(dSheet.id)

    // Deafult Wargear
    let default_gear = /Every model is equipped with: ([\D]*)./g.exec(dSheet.unit_composition);
    if (default_gear != null) {
        default_gear = default_gear[1].split("; ");
        for (const weapon of default_gear) {
            for (const dSheet_gear of dSheet.wargear) {
                if (weapon == dSheet_gear.name.toLowerCase()) {
                    for (const model of dSheet.models) {
                        model.wargear.push(dSheet_gear);
                    }
                }
            }
        }
    }

    //Number of models in unit
    for (const model of dSheet.models) {
        let range = model.models_per_unit.toString().split('-');
        if (range.length > 1) {
            model.models_min = Number(range[0]);
            model.models_max = Number(range[1]);
            delete model.models_per_unit;
        }
    }

    // console.log(dSheet);
    console.log(buildUnit(dSheet));

}

let buildUnit = (fromDsheet) => {
    let newUnit = { models: [] };
    for (const model of fromDsheet.models) {
        let iterants;
        if (model.models_per_unit) iterants = model.models_per_unit;
        else iterants = model.models_min;
        for (let i = 0; i < iterants; i++) {
            newUnit.models.push(model);
        }
    }
    // console.log(newUnit);
    return newUnit;
}

buildDatasheet();