import mongoose from 'mongoose';

const cityStatisticsSchema = new mongoose.Schema(
  {
     cityId: {
       type: mongoose.Schema.Types.ObjectId, ref: 'City'
     },
     year: Number,
     population: Number,
     unemployment: Number,
     avgIncome: Number,
     crimeRate: Number,
     housingPrice: Number,
     healthFacilities: Number
  }, { timestamps: true}
);

export const CityStatistics = mongoose.model('CityStatistics', cityStatisticsSchema)