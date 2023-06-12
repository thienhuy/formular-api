import Results, { IResult } from "../models/results.model";
export const getAllResult = (arrRaceId) => {
  return Results.aggregate([
    {
      $match: {
        $expr: {
          $and: [{ $in: ["$raceId", arrRaceId] }, { $eq: ["$position", 1] }],
        },
      },
    },
    {
      $lookup: {
        from: "drivers",
        let: {
          driver_id: "$driverId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$driver_id", "$_id"],
              },
            },
          },
          {
            $project: {
              forename: 1,
              surname: 1,
            },
          },
        ],
        as: "driver",
      },
    },
    { $unwind: "$driver" },
    {
      $lookup: {
        from: "constructors",
        let: {
          constructor_id: "$constructorId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$constructor_id", "$_id"],
              },
            },
          },
          {
            $project: {
              name: 1,
            },
          },
        ],
        as: "constructor",
      },
    },
    { $unwind: "$constructor" },
    {
      $lookup: {
        from: "races",
        let: {
          race_id: "$raceId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$race_id", "$_id"],
              },
            },
          },
          {
            $lookup: {
              from: "circuits",
              let: {
                circuit_id: "$circuitId",
              },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $eq: ["$$circuit_id", "$_id"],
                    },
                  },
                },
              ],
              as: "circuit",
            },
          },
          {
            $project: {
              date: 1,
              circuit: { country: 1 },
            },
          },
          { $unwind: "$circuit" },
        ],
        as: "race",
      },
    },

    { $unwind: "$race" },
  ]);

  // .find({ raceId: { $in: arrRaceId }, position: 1 })
  // .populate({
  //   path: "driverId",
  //   model: Driver,
  //   select: { forename: 1, surname: 1 },
  // })
  // .populate({
  //   path: "constructorId",
  //   model: Constructors,
  //   select: { name: 1 },
  // });
};

export const getDataAllDriver = (arrDriverId, arrRaceId) => {
  return Results.aggregate([
    {
      $match: {
        $expr: {
          $and: [
            { $in: ["$raceId", arrRaceId] },
            { $in: ["$driverId", arrDriverId] },
          ],
        },
      },
    },
    {
      $group: {
        _id: {
          driver: "$driverId",
          constructor: "$constructorId",
        },
        driverId: { $first: "$driverId" },
        constructorId: { $first: "$constructorId" },
        totalPoint: {
          $sum: {
            $toInt: "$points",
          },
        },
      },
    },
    {
      $lookup: {
        from: "constructors",
        let: {
          constructor_id: "$constructorId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$constructor_id", "$_id"],
              },
            },
          },
          {
            $project: {
              name: 1,
            },
          },
        ],
        as: "constructor",
      },
    },
    { $unwind: "$constructor" },
    {
      $lookup: {
        from: "drivers",
        let: {
          driver_id: "$driverId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$driver_id", "$_id"],
              },
            },
          },
          {
            $project: {
              forename: 1,
              surname: 1,
              nationality: 1,
            },
          },
        ],
        as: "driver",
      },
    },
    { $unwind: "$driver" },
  ]);
};
export const getDataAllTeam = (arrRaceId, arrConstructorId) => {
  return Results.aggregate([
    {
      $match: {
        $expr: {
          $and: [
            { $in: ["$raceId", arrRaceId] },
            { $in: ["$constructorId", arrConstructorId] },
          ],
        },
      },
    },
    {
      $group: {
        _id: {
          constructor: "$constructorId",
        },
        constructorId: { $first: "$constructorId" },
        totalPoint: {
          $sum: {
            $toInt: "$points",
          },
        },
      },
    },
    {
      $lookup: {
        from: "constructors",
        let: {
          constructor_id: "$constructorId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$constructor_id", "$_id"],
              },
            },
          },
          {
            $project: {
              name: 1,
            },
          },
        ],
        as: "constructor",
      },
    },
    { $unwind: "$constructor" },
  ]);
};
