
const EducationMeta = {
    FROM: "From (YYYY)",
    TO: "TO (YYYY)",
    SCHOOL: "School",
    DEGREE: "Degree",
}

const Education = (from = "", to = "", school = "", degree = "") => {
    const { FROM, TO, SCHOOL, DEGREE } = EducationMeta;
    return {
        [FROM]: from,
        [TO]: to,
        [SCHOOL]: school,
        [DEGREE]: degree,
    }
}

export { EducationMeta, Education }