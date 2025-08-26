export function formatCardNumber(text) {
  const cleanText = text.replace(/\s/g, "").slice(0, 16);
  const blocks = cleanText.match(/.{1,4}/g) || [];
  return blocks.join(" ");
}
