

const Btn = ({ white, children }) => {

    return (
        <div className="bg-primary-white p-px inline">
            <button className={white ? 'border transition hover:bg-secondary-blue hover:text-primary-white px-4 font-semibold text-primary-blue py-2 border-primary-blue border-solid'
                : 'border px-4 transition hover:bg-secondary-blue font-semibold text-primary-white py-2 bg-primary-blue border-solid'
            }>
                {children}
            </button>
        </div>
    );
};

export default Btn;
