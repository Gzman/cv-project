import { PersonalInfoMeta } from "../models/PersonalInfoModel"
import { ExperienceMeta } from "../models/ExperienceModel"

const { EMAIL, PHONE } = PersonalInfoMeta;
const { FROM, TO } = ExperienceMeta;

const isValidEmail = (email) => {
    return new RegExp("[a-zA-Z0-9]*.[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+").test(email) ? null : "Invalid email";
}

const isValidPhoneNumber = (phone) => {
    return Number.isNaN(parseInt(phone)) ? "Enter a phonenumber" : null;
}

const isValidYear = (year) => {
    return new RegExp("[0-9]{4,4}").test(year) ? null : "Invalid year (YYYY)"
}

const validator = {
    [EMAIL]: isValidEmail,
    [PHONE]: isValidPhoneNumber,
    [FROM]: isValidYear,
    [TO]: isValidYear,
}

export { validator }