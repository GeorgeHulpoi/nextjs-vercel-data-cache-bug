import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export function GET() {
	revalidateTag('v4/a');
	return new NextResponse(null, { status: 200 });
}
