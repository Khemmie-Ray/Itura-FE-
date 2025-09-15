import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    
    // Clear auth cookies
    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Logout error:', error);
    
    const errorMessage = error?.response?.data?.error ||
                       error?.response?.data?.message ||
                       error?.error ||
                       error?.message ||
                       'Internal server error';
    
    return NextResponse.json(
      { 
        error: errorMessage,
        message: errorMessage
      },
      { status: 500 }
    );
  }
}
