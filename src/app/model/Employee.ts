export class Employee
{
    private _id: number;
    private _name: String;
    private _surname: String;
    private _sex: String;
    private _email: String;

    constructor(
        p_id: number,
        p_name: String,
        p_surname: String,
        p_sex: String,
        p_email: String
    )
    {
        this._id = p_id;
        this._name = p_name;
        this._surname = p_surname;
        this._sex = p_sex;
        this._email = p_email;
    }

    public getId(): number {
        return this._id;
    }

    public setId(p_id: number): void {
        this._id = p_id;
    }

    public getName(): String {
        return this._name;
    }

    public setName(p_name: String): void {
        this._name = p_name;
    }

    public getSurname(): String {
        return this._surname;
    }

    public setSurname(p_surname: String): void {
        this._surname = p_surname;
    }

    public getSex(): String {
        return this._sex;
    }

    public setSex(p_sex: String): void {
        this._sex = p_sex;
    }

    public getEmail(): String {
        return this._email;
    }

    public setEmail(p_email: String): void {
        this._email = p_email;
    }

}