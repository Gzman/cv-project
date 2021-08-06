
const PersonalInfoMeta = {
    FIRSTNAME: "Firstname",
    LASTNAME: "Lastname",
    TITLE: "Title",
    CITY: "City",
    PHONE: "Phonenumber",
    EMAIL: "Email",
}

const PersonalInfo = (firstname = "", lastname = "", title = "", city = "", phoneNumber = "", email = "") => {
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

export { PersonalInfoMeta, PersonalInfo }