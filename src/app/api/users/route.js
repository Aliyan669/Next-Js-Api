import { user } from "@/utility/db";
import { NextResponse } from "next/server";

// export function GET(request) {
//     return NextResponse.json({ name: "aliyan", age: 16, city: "karachi" }, { status: 200 })
// }

///////////// Ye Get Method ki api hai data get karna ke liya /////////
export function GET() {
    const data = user;
    return NextResponse.json(data, { status: 200 })
}



///////////// Ye Post Method ki api hai data send karna ke liya /////////

export async function POST(request) {
    let payload = await request.json();
    console.log(payload)
    if (!payload.name || !payload.age || !payload.city) {
        return NextResponse.json({ result: "Require field not found", success: false }, { status: 400 });

    }
    return NextResponse.json({ result: "New User Created", success: true }, { status: 201 });
}   
