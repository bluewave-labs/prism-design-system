import { codeToHtml as shikiCodeToHtml } from 'shiki';

const codeToHtml = async (code: string) => {
  const html = await shikiCodeToHtml(code, {
    lang: 'javascript',
    theme: 'dracula',
  });
  return html;
};

export default codeToHtml;
