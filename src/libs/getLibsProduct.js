export function getPagination(size, page) {
    const limit = size ? +size : 4;
    const offset = page ? page * limit : 0;
    return { limit, offset };

}
export function search(object, value) {

    const key = Object.keys(object).find(key => object[key] === value);

    const obj = {};

    obj[key] = {
        $regex: new RegExp(value),
        $options: "i"
    };
    return value ? obj : {};
}