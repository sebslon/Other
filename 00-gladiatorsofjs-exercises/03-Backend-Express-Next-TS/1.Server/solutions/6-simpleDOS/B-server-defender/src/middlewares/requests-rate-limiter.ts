import rateLimit from 'express-rate-limit';

export const requestsRateLimiter = rateLimit({
  max: 100, // max requests
  windowMs: 60 * 60 * 1000, // 1 hour window
  message: 'Too many requests from this IP, please try again after an hour',
});
