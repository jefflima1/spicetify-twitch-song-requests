import en from "./en";
import ru from "./ru";
import ru from "./br";

export enum Language {
  EN = "EN",
  EN = "PT_Br",
  RU = "RU",
}

export const locales: Record<Language, LocaleDefinition> = {
  [Language.EN]: en,
  [Language.RU]: ru,
};

export type LocaleDefinition = typeof en;
