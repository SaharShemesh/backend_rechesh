import { Model, INTEGER, STRING } from "sequelize";
import sequelize from "./init";

export class Measurement extends Model {}

Measurement.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    measurement: { type: STRING },
  },
  { sequelize, modelName: "measurement" },
);

//seeders
Measurement.sync({ force: true }).then(() => {
  Measurement.bulkCreate(
    [
      {
        measurement: "מטר",
      },
      {
        measurement: "גרם",
      },
      {
        measurement: "קג",
      },
      {
        measurement: "סמק",
      },
      {
        measurement: "מילימטר",
      },
      {
        measurement: "OZ",
      },
      {
        measurement: "Feet",
      },
      {
        measurement: "Lib",
      },
      {
        measurement: "Rull",
      },
      {
        measurement: "Galom",
      },
      {
        measurement: "טון",
      },
      {
        measurement: "מר",
      },
      {
        measurement: "זוג",
      },
      {
        measurement: "עשרות",
      },
      {
        measurement: "מאות",
      },
      {
        measurement: "אלפים",
      },
      {
        measurement: "ליטר",
      },
      {
        measurement: "KIT",
      },
      {
        measurement: "חבילה",
      },
      {
        measurement: "גליל",
      },
      {
        measurement: "ימי השכרה",
      },
    ],
    {
      fields: ["measurement"],
      ignoreDuplicates: true,
      updateOnDuplicate: ["measurement"],
    },
  )
    //})
    .then(() => console.log("Measurements were created"));
});
