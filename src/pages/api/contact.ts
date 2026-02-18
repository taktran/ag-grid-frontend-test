import type { APIRoute } from "astro";
import * as z from "zod";

export const prerender = false;

const ContactInput = z.union([
  z.object({
    name: z.string().min(1, "Name is required"),
    message: z.string().min(1, "Message is required"),
  }),
  z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string(),
    workEmail: z.string().email(),
    message: z.string().min(1, "Message is required"),
  }),
]);

/**
 * Contact form endpoint
 */
export const POST = (async ({ request }) => {
  try {
    const body = await request.json();
    const data = ContactInput.parse(body);

    console.log("Received contact form submission:", data);

    const output = { success: true };
    const response = new Response(JSON.stringify(output), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });

    return response;
  } catch (error) {
    let response;
    let status = 500;
    if (error instanceof z.ZodError) {
      response = {
        success: false,
        error: "Validation failed",
        errors: error.issues,
      };
      status = 400;
    } else {
      response = {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }

    return new Response(JSON.stringify(response), {
      headers: {
        "Content-Type": "application/json",
      },
      status,
    });
  }
}) satisfies APIRoute;
