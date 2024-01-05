import * as z from 'zod';

export const UserValidation = z.object({
  profile_photo : z.string().url(),
  name          : z.string().min(3).max(40),
  username      : z.string().min(3).max(40),
  bio           : z.string().min(3).max(1000),
})