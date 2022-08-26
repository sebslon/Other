import { Schema, model } from 'mongoose';

import { ICat } from './Cat';

const catSchema = new Schema<ICat>({
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
  common_id: {
    type: String,
    required: true,
  },
});

export const MongoCat = model('Cat', catSchema);
