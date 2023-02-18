import { registerAs } from '@nestjs/config';
export default registerAs('secret', () => ({
  pepper: process.env.PEPPER,
  jwtSecret: process.env.JWT_SECRET,
}));
