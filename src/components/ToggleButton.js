import { useTranslation } from 'react-i18next';

const ToggleButton = ({ link, changeList, ifExist }) => {

    const {t} = useTranslation();

    const handleClick = ({ link }) => {
        changeList({ link, remove: ifExist })
    }

    return (
        <button onClick={() => handleClick({ link })}
            style={ifExist ? { backgroundColor: 'red' } : { backgroundColor: '' }}>
            {ifExist ? t('btnUndo') : t("btnSave")}
        </button>
    );
}

export default ToggleButton

