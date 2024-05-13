// application
import { baseUrl } from '~/services/utils';
import { ILanguage } from '~/interfaces/language';
// data
import dataShopLanguages, { dataShopDefaultLocale } from '~/data/shopLanguages';

// get data language
export function getDefaultLocale(): string {
    return dataShopDefaultLocale;
}

// get interface
export function getAllLanguages(): ILanguage[] {
    return dataShopLanguages;
}

// default language = en
export function getDefaultLanguage(): ILanguage {
    const language = getAllLanguages().find((language) => language.locale === getDefaultLocale());

    if (!language) {
        throw new Error('Default language not found.');
    }

    return language;
}

// เอาค่า locale มาใส่เป็น path url from datashoplanguage เช่น /en, /th
export function getLanguageByPath(path: string): ILanguage | null {
    const matchedLanguage = getAllLanguages().find((language) => {
        const rg = new RegExp(`^\\/${language.locale}(\\/|$)`);
        return rg.test(path);
    });

    return matchedLanguage || null;
}

// get language locale value in datashoplanguage
export function getLanguageByLocale(locale: string): ILanguage | null {
    return getAllLanguages().find((language) => language.locale === locale) || null;
}

// get translation from public/i18n
async function loadTranslation(locale: string): Promise<Record<string, string>> {
    if (process.browser) {
        return fetch(baseUrl(`/i18n/${locale}.json`)).then((response) => response.json());
    }

    return (await import(`../../../public/i18n/${locale}.json`)).default;
}

// if language match in public/i18n. let it trans
export async function loadMessages(locale: string): Promise<Record<string, string>> {
    const baseMessages: ReturnType<typeof loadTranslation> = locale === getDefaultLocale()
        ? Promise.resolve({})
        : loadTranslation(getDefaultLocale());
    const mainMessages = loadTranslation(locale);

    return { ...await baseMessages, ...await mainMessages };
}
