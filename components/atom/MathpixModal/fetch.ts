"use server";

const appID = `${process.env.MATHPIX_APP_ID}`;
const appKey = `${process.env.MATHPIX_APP_KEY}`;

export async function image_to_latex(file: File) {
  const data = new FormData();
  data.append("file", file);

  try {
    const response = await fetch("https://api.mathpix.com/v3/latex", {
      method: "POST",
      headers: {
        app_id: appID,
        app_key: appKey,
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return " $" + result.latex + "$ ";
  } catch (error) {
    throw error;
  }
}
