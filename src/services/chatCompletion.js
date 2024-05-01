import { openai } from "../infra/openAi";
import { systemPrompts as sysPrompShared } from "../prompts/shared/system";

const config = {
  model: "gpt-4-0125-preview",
  temperature: 0,
  stream: false,
};

export const chat = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      ...config,
      response_format: { type: "json_object" },
      messages: prompt,
    });
    return response?.choices?.[0];
  } catch (e) {
    throw e;
  }
};

export const rewrite = async (content) => {
  const prompt = sysPrompShared;
  prompt.push({ role: "user", content });

  try {
    const response = await openai.chat.completions.create({
      ...config,
      temperature: 0.2,
      messages: prompt,
    });
    return response?.choices?.[0]?.message?.content;
  } catch (e) {
    throw e;
  }
};
