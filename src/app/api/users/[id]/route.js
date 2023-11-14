import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request, content) {

    const userData = user.filter((e) => e.id == content.params.id)

    return NextResponse.json(
        userData.length == 0 ? { result: "No Data Found", success: false } : { result: userData[0], success: true },
        { status: 200 })
}

///////////// Ye Put Method ki api hai data Update karna ke liya /////////

export async function PUT(request, content) {
    let payload = await request.json();
    payload.id = content.params.id;
    console.log(payload)
    if (!payload.name || !payload.age || !payload.city) {
        return NextResponse.json({ result: "Request data is not valid", success: false }, { status: 400 });

    }
    return NextResponse.json({ result: payload, success: true }, { status: 201 });
}


///////////// Ye Delete Method ki api hai data Delete karna ke liya /////////

export function DELETE(request, content) {
    let id = content.params.id
    if (id) {
        return NextResponse.json({ result: "User Deleted", success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: "Internal error please try after sometime", success: false }, { status: 400 })
    }
}
