import { NextApiRequest, NextApiResponse } from "next";
import User from "./models/User";

const loadDataUser = async (props?: any): Promise<User[]> => {
    const response = await fetch('/api/users');
    const data = await response.json();

    return data.map((u: any) => new User(u));
}