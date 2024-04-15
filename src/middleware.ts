import { NextRequest, NextResponse } from "next/server";
import { getServerSideUser } from "./lib/payload-utils";

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { user } = await getServerSideUser(cookies);

  if (user && ["/sign-in", "/sign-up"].includes(nextUrl.pathname)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/`);
  }

  if (!user && ["/create-order"].includes(nextUrl.pathname)) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/sign-in?origin=create-order`
    );
  }
  if (!user && ["/view-orders"].includes(nextUrl.pathname)) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/sign-in?origin=view-orders`
    );
  }
  if (user?.role !== "admin" && ["/analytics"].includes(nextUrl.pathname)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/`);
  }

  return NextResponse.next();
}
