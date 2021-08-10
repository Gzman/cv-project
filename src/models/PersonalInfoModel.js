
const PersonalInfoMeta = {
    FIRSTNAME: "Firstname",
    LASTNAME: "Lastname",
    TITLE: "Title",
    CITY: "Adress",
    PHONE: "Phonenumber",
    EMAIL: "Email",
}

const PersonalInfoModel = (firstname = "", lastname = "", title = "", city = "", phoneNumber = "", email = "") => {
    const { FIRSTNAME, LASTNAME, TITLE, CITY, PHONE, EMAIL } = PersonalInfoMeta;
    return {
        [FIRSTNAME]: firstname,
        [LASTNAME]: lastname,
        [TITLE]: title,
        [CITY]: city,
        [PHONE]: phoneNumber,
        [EMAIL]: email,
    }
}

export { PersonalInfoMeta, PersonalInfoModel }