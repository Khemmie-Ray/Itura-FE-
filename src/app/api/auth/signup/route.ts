import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CavosAuth } from "cavos-service-sdk";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const APP_ID = "app-3b35b8860b9ef249f74b13b1254f761b";
    const cavosAuth = new CavosAuth("sepolia", APP_ID);

    const result = await cavosAuth.signUp(
      email,
      password,
      process.env.NEXT_PUBLIC_CAVOS_ORG_SECRET!
    );

    if (!result.success) {
      return NextResponse.json(
        {
          error: result.error || result.message || "Sign up failed",
          message: result.message || "Sign up failed",
        },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.authData.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60,
    });

    cookieStore.set("refreshToken", result.data.authData.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    });

    return NextResponse.json({
      success: true,
      user: {
        user_id: result.data.user_id,
        email: result.data.user.email, 
        wallet_address: result.data.wallet.address,
        access_token: result.data.authData.accessToken,
        token: result.data.authData.accessToken,
      },
    });
  } catch (error: any) {
    console.error("Signup error:", error);

    const errorMessage =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.error ||
      error?.message ||
      "Internal server error";

    return NextResponse.json(
      {
        error: errorMessage,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
