import { user } from "@/utility/db";
import { NextResponse } from "next/server";

// export function GET(request) {
//     return NextResponse.json({ name: "aliyan", age: 16, city: "karachi" }, { status: 200 })
// }

export function GET(request) {
    const data = user;
    return NextResponse.json(data, { status: 200 })
}
    