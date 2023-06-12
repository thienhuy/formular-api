import Qualifying, { IQualifying } from "../models/qualifying.model";

export const getByRace = (raceId) => {
  return Qualifying.aggregate([
    {
      $match: {
        $expr: { $eq: ["$raceId", raceId] },
      },
    },
    { $sort: { position: 1 } },
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
  ]);
};
