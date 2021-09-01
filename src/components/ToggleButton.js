const ToggleButton = ({ link, changeList, ifExist }) => {

    const handleClick = ({ link }) => {
        changeList({ link, remove: ifExist })
    }

    return (
        <button onClick={() => handleClick({ link })}
            style={ifExist ? { backgroundColor: 'red' } : { backgroundColor: '' }}>
            {ifExist ? 'Cofnij' : 'Na później'}
        </button>
    );
}

export default ToggleButton

