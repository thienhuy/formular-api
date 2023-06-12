import PitStop, { IPitStop } from "../models/pit_stops.model";

export const getByRace = (raceId) => {
  return PitStop.aggregate([
    {
      $match: {
        $expr: {
          $and: [{ $eq: ["$raceId", raceId] }],
        },
      },
    },
    { $sort: { lap: 1 } },
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
  ]);
};
