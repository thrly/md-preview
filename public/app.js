const input = document.getElementById("user_text_input");

const mdPreview = document.getElementById("preview");
// const htmlPreview = document.getElementById("htmlPreview");
const htmlPreviewText = document.getElementById("htmlTextArea");

input.addEventListener("input", () => {
  const rawHtml = marked.parse(input.value, { gfm: true });
  const cleanHtml = DOMPurify.sanitize(rawHtml);

  mdPreview.innerHTML = cleanHtml;
  htmlPreviewText.value = cleanHtml;
});
