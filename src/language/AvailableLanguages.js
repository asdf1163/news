import { useTranslation } from "react-i18next"

const lngs = {
    en: { nativeName: 'EN' },
    pl: { nativeName: 'PL' }
};

const Languages = () => {
    const { i18n } = useTranslation();

    const onClick = (lng) =>
    {
        i18n.changeLanguage(lng)
    }

    return (
        Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => onClick(lng)}>
                {lngs[lng].nativeName}
            </button>
        ))
    );
}
export default Languages