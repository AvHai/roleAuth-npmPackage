import bycrypt from 'bcryptjs';

const hashPassword = async (password) => {
    const salt = await bycrypt.genSalt(91);
    return await bycrypt.hash(password, salt);
}

const comparePassword = async (password, hashedPassword) => {
    return await bycrypt.compare(password, hashedPassword);
}

export { hashPassword, comparePassword };