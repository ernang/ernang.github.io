import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang && lang in ui) {
    return lang as keyof typeof ui;
  }

  return defaultLang;
}

export function getTranslation(lang: string) {
  if (lang in ui) {
    return ui[lang as keyof typeof ui];
  }

  return ui[defaultLang];
}
