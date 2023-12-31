import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Btn = ({ white, children, link, clickFunc }) => {

    if (link) {
        return (
            <Link to={link}>
                <button onClick={clickFunc ? clickFunc : null} className={white ? 'border transition border-solid bg-primary-white hover:bg-secondary-blue hover:text-primary-white px-4 font-semibold text-primary-blue py-2 border-primary-white '
                    : 'border px-4 transition hover:bg-secondary-blue font-semibold text-primary-white py-2 bg-primary-blue border-solid'
                }>
                    {children}
                </button>
            </Link>
        );
    } else return (
        <button onClick={clickFunc ? clickFunc : null} className={white ? 'border transition border-solid bg-primary-white hover:bg-secondary-blue hover:text-primary-white px-4 font-semibold text-primary-blue py-2 border-primary-white '
            : 'border px-4 transition hover:bg-secondary-blue font-semibold text-primary-white bg-primary-blue border-solid'
        }>
            {children}
        </button>
    );
};

Btn.propTypes = {
    clickFunc: PropTypes.func
}

export default Btn;
