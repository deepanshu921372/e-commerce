import { NextResponse } from "next/server";
import connectToDB from "@/database";
import { Binary } from 'mongodb';

export async function POST(req) {
  try {
    await connectToDB();

    const formData = await req.formData();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json({
        success: false,
        message: "No image provided"
      });
    }

    // Convert image to buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert to Base64 string
    const base64String = buffer.toString('base64');
    const imageUrl = `data:${image.type};base64,${base64String}`;

    return NextResponse.json({
      success: true,
      imageUrl: imageUrl
    });

  } catch (error) {
    console.log('Error uploading image:', error);
    return NextResponse.json({
      success: false,
      message: "Error uploading image"
    });
  }
}