import mongoose from 'mongoose';

import { ICat } from './Cat';

const catSchema = new mongoose.Schema<ICat>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
});

export const MongoCat = mongoose.model('Cat', catSchema);
