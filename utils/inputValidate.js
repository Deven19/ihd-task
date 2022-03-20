exports.variableSanityCheck = async (value, type, elementName, minLength, maxLength) => {
    if (type) {
        switch (type) {
            case "string":
                if (!value) return { result: false, value: false, message: elementName + " should be passed!" };
                if (typeof value !== "string") return { result: false, value: false, message: elementName + " should be string!" };
                if (value.trim() == "") return { result: false, value: false, message: elementName + " should not be blank!" };
                if ((minLength && value.trim().length < minLength) || (maxLength && value.trim().length > maxLength)) return { result: false, value: false, message: elementName + " should be under " + minLength + ' - ' + maxLength + " characters."};
                else return { result: true, value: value.trim(), message: "" }
                break;
            
            case "number":
                if (!value) return { result: false, value: false, message: elementName + " should be passed!" };
                if (!(Number.isInteger(Number(value)))) return { result: false, value: false, message: elementName + " should be number!" };
                if (!value) return { result: false, value: false, message: elementName + " should be passed!" };
                if (typeof Number(value) !== "number") return { result: false, value: false, message: elementName + " should be number!" };
                if ((minLength && value < minLength) || (maxLength && value > maxLength)) return { result: false, value: false, message: elementName + " should be gretter than " + minLength + (maxLength?' and less than ' +maxLength : '') };
                else return { result: true, value: value, message: "" };
                break;
            
            default:
                return { result: false, value: "", message: "Something went wrong!" };
        }
    } else {
        return { result: false, value: "", message: "Something went wrong!" };
    }
}