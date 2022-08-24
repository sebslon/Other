import mongoose from 'mongoose';

import { ICat } from './Cat';

const catSchema = new mongoose.Schema<ICat>({
  name: String,
  age: Number,
  colour: String,
  sex: String,
});

export const MongoCat = mongoose.model('Cat', catSchema);
