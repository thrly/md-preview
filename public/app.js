import { marked } from "marked";
import DOMPurify from "dompurify";

const input = document.getElementById("user_text_input");

const mdPreview = document.getElementById("md_preview");
const htmlPreviewText = document.getElementById("htmlTextArea");

let cleanHtml;

input.addEventListener("input", () => {
  const rawHtml = marked.parse(input.value, { gfm: true });
  cleanHtml = DOMPurify.sanitize(rawHtml);
  mdPreview.innerHTML = cleanHtml;
  htmlPreviewText.value = cleanHtml;
});

const pasteMarkdown = document.getElementById("pasteMd");

pasteMarkdown.addEventListener("click", async () => {
  try {
    const pasteText = await navigator.clipboard.readText();
    input.value = pasteText;
    console.log("Pasted!", pasteText);
  } catch (err) {
    console.error("Failed to paste: ", err);
  }
});
const copyMarkDown = document.getElementById("copyMd");

copyMarkDown.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(input.value);
    copyMarkDown.textContent = "Copied!";
    setTimeout(() => {
      copyMarkDown.textContent = "Copy to Clipboard";
    }, 1500);
    console.log("Copied!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});

const copyHTML = document.getElementById("copyHTML");

copyHTML.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(cleanHtml);
    copyHTML.textContent = "Copied!";
    setTimeout(() => {
      copyHTML.textContent = "Copy to Clipboard";
    }, 1500);
    console.log("Copied!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});
