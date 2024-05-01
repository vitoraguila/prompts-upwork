import { systemPrompts } from "../src/prompts/ventas/system";
import { medias } from "../src/dataset/media";
import { chat, rewrite } from "../src/services/chatCompletion";

export default async function GET(request, response) {
  const { message } = request.query;

  if (!message) {
    return response.status(400).json({ error: "Message is required" });
  }

  // ================= MAIN LOGIC TO COPY - BEGIN ==================
  var prueba = true;
  const prompt = prueba ? systemPrompts : [];
  prompt.push({ role: "user", content: message });

  var res = await chat(prompt);
  const msg = res?.message;
  const { answer, intent, id_video_testimonial, human_intervention } =
    JSON.parse(msg?.content);

  if (answer) {
    // TODO: Handle answer
  }

  const humanIntervention = human_intervention === "true";
  if (humanIntervention) {
    // TODO: Handle human intervention
  }

  const mediaId = id_video_testimonial?.[0];
  const answerMedia = medias?.[mediaId];

  if (answerMedia) {
    // TODO: Handle answer with media, case exists
  }

  // Rewritting the answer for a human-friendly response
  const rewriteAnswer = await rewrite(answer);
  
  // ================= MAIN LOGIC TO COPY - END ==================


  // Output for Vercel serverless function
  return response.status(400).json({
    answer,
    rewriteAnswer,
    intent,
    answerMedia,
    humanIntervention,
  });
}
