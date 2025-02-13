import * as bcrypt from 'bcrypt';

const saltRounds = 10;

//plainpasswword vì nó có thể nhìn thấy được, còn hash thì đã băm ra
export const hashPasswordHelper = async (plainPassword: string) => {
  try {
    return await bcrypt.hash(plainPassword, saltRounds);
  } catch (error) {
    console.log(error);
  }
};
