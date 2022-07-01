import mongoose from 'mongoose';

const { Schema } = mongoose;

const UrlSchema = new Schema({
  originalUrl: String,
  urlCode: String,
  shortUrl: String,
  qrCode: String,
  count: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Url = mongoose.model('Url', UrlSchema);

export default Url;
